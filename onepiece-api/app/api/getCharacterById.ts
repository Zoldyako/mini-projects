import { Character } from "../types";

async function getCharacterById(characterId: number): Promise<Character> {
    const res = await fetch(`https://api.api-onepiece.com/v2/characters/en/${characterId}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export { getCharacterById };
