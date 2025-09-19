'use client'

import { useState, useEffect } from 'react';
import { Character } from '../types';
import CharacterCard from '../components/ui/characterCard';
import { getCharacterById } from '../api/getCharacterById';

export default function Characters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const pageSize: number = 10;

    useEffect(() => {
        let isCanceled = false;
        const fetchCharacters = async () => {
            setIsLoading(true);

            try {
                const start: number = (page - 1) * pageSize + 1;
                const ids = Array.from({ length: pageSize }, (_, i) => start + i);
                const newCharacters: Character[] = await Promise.all(
                    ids.map((id) => getCharacterById(id))
                );
                if (!isCanceled) setCharacters(newCharacters);
            } finally {
                if (!isCanceled) setIsLoading(false);
            }
        };

        fetchCharacters();
        return () => {
            isCanceled = true;
        };
    }, [page]);

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col justify-end items-center w-full max-w-screen-sm mx-4'>
                    <div className='font-bold w-full'>
                        <CharacterCard id='ID' name='Name' age='Age' bounty='Bounty (Berry)' />
                    </div>
                    {characters.map((character) => {
                        const { id, name, age, bounty } = character;

                        return (
                            <CharacterCard
                                key={id}
                                id={id}
                                name={name}
                                age={age ? age : 'Unkown'}
                                bounty={bounty ? bounty : 'Unknown'}
                            />
                        );
                    })}
                </div>
                <div className='flex gap-4 items-center'>
                    <button
                        className='btn bg-sky-600 text-gray-950 font-bold py-2 px-4 rounded-xl hover:bg-sky-400 active:bg-sky-900'
                        onClick={() => {
                            setPage(page - 1);
                        }}>
                        Previous Page
                    </button>
                    <p className='text-xl font-bold'>Page: {page}</p>
                    <button
                        className='btn bg-sky-600 text-gray-950 font-bold py-2 px-4 rounded-xl hover:bg-sky-400 active:bg-sky-900'
                        onClick={() => {
                            setPage(page + 1);
                        }}>
                        Next Page
                    </button>
                </div>
                <div className='h-4'>
                    <p
                        className={`text-emerald-400 font-bold text ${
                            isLoading ? 'inline' : 'hidden'
                        }`}>
                        Loading Characters
                    </p>
                </div>
            </div>
        </>
    );
}
