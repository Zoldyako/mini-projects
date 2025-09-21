'use client';

import { useState, useEffect } from 'react';
import { Character } from '../types';
import CharacterCard from '../components/ui/CharacterCard';
import { getCharacterById } from '../api/getCharacterById';
import Button from '../components/ui/Button';
import CardContainer from '../components/ui/CardContainer';
import Loading from '../components/ui/Loading';

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
        <div className='flex flex-col items-center gap-8'>
            <Loading isLoading={isLoading}/>
            <div className='flex flex-wrap justify-center gap-8 mx-4'>
                {characters.map((character) => {
                    const { id, name, job, age, bounty, crew } = character;
                    return (
                        <CardContainer
                            children={
                                <CharacterCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    job={job}
                                    age={age ? age : 'Unkown'}
                                    bounty={bounty ? bounty : 'Unknown'}
                                    crew={crew}
                                />
                            }
                        />
                    );
                })}
            </div>
            <div className='flex gap-4 items-center'>
                <Button text='Previous Page' handleClick={() => setPage(page - 1)} />
                <p className='text-xl font-bold'>Page: {page}</p>
                <Button text='Next Page' handleClick={() => setPage(page + 1)} />
            </div>
        </div>
    );
}
