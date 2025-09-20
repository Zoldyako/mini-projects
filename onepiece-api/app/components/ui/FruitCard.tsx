import { Fruit } from '@/app/types';
import Tag from './Tag';

export default function FruitCard({ id, name, type, description }: Fruit) {
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-bold'>{name}</h2>
            <div className='flex gap-1 py-2'>
                <Tag children={<p>{id}</p>} />
                <Tag children={<p>{type}</p>} />
            </div>
            <h3 className='text-lg font-bold'>Description</h3>
            <p className='text-sm'>{description}</p>
        </div>
    );
}
