import { Fruit } from '@/app/types';

export default function FruitCard({
    id,
    name,
    romanName,
    type,
    description,
}: {
    id: number | string;
    name: string;
    romanName: string;
    type: string;
    description: string;
}) {
    return (
        <div>
            <h2><strong>Name:</strong> {name}</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Roman Name:</strong> {romanName}</p>
            <p><strong>Type: </strong> {type}</p>
            <p><strong>Description: </strong> {description}</p>
        </div>
    );
}
