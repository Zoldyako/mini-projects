'use client'

import { useState, useEffect } from 'react';
import CharacterCard from './components/ui/characterCard';
import { getCharacterById } from './api/getCharacterById';
import { Character } from './types/index';

export default function Home() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            const newCharacter: Character[] = []; 
            const start: number = page * 10 - 9 
            const end: number = page * 10;
            setIsLoading(true);

            for (let index = start; index <= end; index++) {
                const characterData = await getCharacterById(index);
                newCharacter.push(characterData);
            }

            setIsLoading(false);
            setCharacters(newCharacter);
        }

        fetchCharacters();
    }, [page])

    return (
        <>
            <main className='flex flex-col items-center gap-4 mt-16'>
                <div className='flex gap-4 items-center'>
                    <button className="btn bg-emerald-400 text-black p-4 rounded-xl"
                        onClick={() => { setPage(page - 1)}}>Previous Page
                    </button>
                    <p className='text-xl font-bold'>Page: {page}</p>
                    <button className="btn bg-emerald-400 text-black p-4 rounded-xl"
                        onClick={() => { setPage(page + 1)}}>Next Page
                    </button>
                </div>
                <div className="h-4">
                    <p>{isLoading ? 'Loading characters' : ''}</p>
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    {characters.map((character)=> (
                        <CharacterCard key={character.id}
                        id={character.id}
                        name={character.name}
                        age={character.age}
                        bounty={character.bounty}
                        />
                    ))}
                </div>

            </main>
        </>
    );
}
