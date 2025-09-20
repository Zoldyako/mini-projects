import { Fruit } from '../types'

export async function getFruitsById(id: number): Promise<Fruit> {
    const res = await fetch(`https://api.api-onepiece.com/v2/fruits/en/${id}`);
    const data = res.json();
    console.log(data);
    return data;
} 