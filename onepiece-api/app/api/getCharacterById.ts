async function getCharacterById(characterId: number) {
    const res = await fetch(`https://api.api-onepiece.com/v2/characters/en/${characterId}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export { getCharacterById };
