'use client'

import { useEffect, useState } from 'react';
import { Fruit } from '../types';
import FruitCard from '../components/ui/fruitCard'
import { getFruitsById } from '../api/fruits';
import Button from '../components/ui/button';

export default function DevilFruits() {
    const [fruit, setFruit] = useState<Fruit>({ id: '', name: '', romanName: '', type: '', description: ''});
    const [fruitNumber, setFruitNumber] = useState(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        let isCanceled = false;
        const fetchFruit = async () => {
            setIsLoading(true);

            try {
                const fruitData: Fruit = await getFruitsById(fruitNumber);
                if (!isCanceled) setFruit(fruitData);
            } catch (error) {
                console.log(error);
            } finally {
                if (!isCanceled) setIsLoading(false);
            }
        };

        fetchFruit();
        return () => {
            isCanceled = true;
        };
    }, [fruitNumber]);
    
    return (
        <>
            <div className='flex flex-col items-center w-md'>
                <h1>I'm a devil fruits page</h1>
                <FruitCard 
                    id={fruit.id}
                    name={fruit.name}
                    romanName={fruit.romanName}
                    type={fruit.type}
                    description={fruit.description}
                />
                <div className='flex items-center gap-4 mt-4'>
                    <Button
                        text='Previous Fruit'
                        handleClick={() => setFruitNumber(fruitNumber - 1)}
                    />
                    <p>Fruit ID: {fruit.id}</p>
                    <Button
                        text='Next Fruit'
                        handleClick={() => setFruitNumber(fruitNumber + 1)}
                    />
                </div>
                <p className={isLoading ? 'inline' : 'hidden'}>Loading Fruit</p>
            </div>
        </>
    );
}
