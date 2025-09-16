'use client'

import { useState } from 'react';
import CharacterCard from './components/ui/characterCard';
import { getCharacterById } from './api/getCharacterById';
import { Character } from './types/index';

export default function Home() {
    const [character, setCharacter] = useState<Character>({id: null, name:'', age: '', bounty: ''})
    const [characterId, setCharacterId] = useState<number>(1);

    async function setCharacterCard(characterId: number) {
        const data = await getCharacterById(characterId);
        setCharacter(data);
    }

    function handleChange(event: any) {
        setCharacterId(event.target.value);
    }

    return (
        <>
            <main className='flex flex-col items-center gap-4 mt-16'>
                <CharacterCard 
                    id={character.id}
                    name={character.name}
                    age={character.age}
                    bounty={character.bounty}
                />
                <label 
                    htmlFor='characterId' 
                    className='flex flex-col gap-4'> Type the character ID (number)
                    <input 
                        className='border-2 border-solid p-2 rounded-md border-emerald-800' 
                        type="number" name='characterId'
                        onChange={(handleChange)} 
                        />
                </label>
                <button className="btn bg-emerald-400 text-black p-4 rounded-xl"
                    onClick={() => setCharacterCard(characterId)}>New Character</button>
            </main>
        </>
    );
}
