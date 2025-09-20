'use client';

import { useEffect, useState } from 'react';
import CardContainer from '../components/ui/CardContainer';
import FruitCard from '../components/ui/FruitCard';
import Button from '../components/ui/Button';
import { getFruitsById } from '../api/fruits';
import { Fruit } from '../types';

export default function DevilFruits() {
    const [fruit, setFruit] = useState<Fruit>({
        id: 'Loading',
        name: 'Loading',
        type: 'Loading',
        description: 'Loading',
    });
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
                <CardContainer
                    children={
                        <FruitCard
                            id={fruit.id}
                            name={fruit.name}
                            type={fruit.type}
                            description={fruit.description}
                        />
                    }
                />
                <div className='flex items-center justify-center gap-6 w-sm mt-4'>
                    <Button text='Prev' handleClick={() => setFruitNumber(fruitNumber - 1)} />
                    <p className='font-bold'>{fruit.id}</p>
                    <Button text='Next' handleClick={() => setFruitNumber(fruitNumber + 1)} />
                </div>
                <p
                    className={`absolute top-40 font-bold bg-green-600 px-3 py-1 rounded-lg ${
                        isLoading ? '' : 'hidden'
                    }`}>
                    Loading Fruit
                </p>
            </div>
        </>
    );
}
//
