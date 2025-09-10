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

    const getCharacter = async (characterId: number) => {
        const response = await fetch(`https://api.api-onepiece.com/v2/characters/en/${characterId}`)
        const { id, name, age, bounty } = await response.json();
        setCharacter({ id, name, age, bounty});
        console.log(character);
    }

    return (
        <div>
            <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
                <div>
                    <h1>One Piece Character Info</h1>
                    <h2><strong>Name:</strong> {character.name}</h2>
                    <h2><strong>Age:</strong> {character.age}</h2>
                    <h2><strong>Bounty:</strong> {character.bounty}</h2>
                </div>
                <button className="btn bg-blue-200 text-black p-4"
                    onClick={() =>getCharacter(3)}>New Character</button>
            </main>
        </div>
    );
}
