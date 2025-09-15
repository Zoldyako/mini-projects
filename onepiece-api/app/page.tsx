'use client'

import { useState } from 'react';

type Character = {
    id: number,
    name: string,
    age: string,
    bounty: string,
}

export default function Home() {
    const [character, setCharacter] = useState<Character>({ id: 1, name: 'Luffy', age: '19', bounty: 'unknown'})
    const [characterId, setCharacterId] = useState<number>(1);

    async function getCharacter(characterId: number) {
        const response = await fetch(`https://api.api-onepiece.com/v2/characters/en/${characterId}`)
        const { id, name, age, bounty } = await response.json();
        setCharacter({ id, name, age, bounty});
        console.log(character);
    }

    function handleChange(event: any) {
        setCharacterId(event.target.value);
    }

    return (
        <>
            <main className='flex flex-col items-center gap-4 mt-16'>
                <div className='bg-gray-700 max-w-md p-4 rounded-xl'>
                    <h1>One Piece Character Info</h1>
                    <h2><strong>ID:</strong> {character.id}</h2>
                    <h2><strong>Name:</strong> {character.name}</h2>
                    <h2><strong>Age:</strong> {character.age}</h2>
                    <h2><strong>Bounty:</strong> {character.bounty}</h2>
                </div>
                <label 
                    htmlFor='characterId' 
                    className='flex flex-col gap-4'> Type the character ID (number)
                    <input 
                        className='border-2 border-solid p-2 rounded-md border-emerald-800' 
                        type="number" name='characterId'
                        onChange={handleChange} 
                        />
                </label>
                <button className="btn bg-emerald-400 text-black p-4 rounded-xl"
                    onClick={() =>getCharacter(characterId)}>New Character</button>
            </main>
        </>
    );
}
