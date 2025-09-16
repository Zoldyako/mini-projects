import { Character } from '../../types/index'

export default function CharacterCard({id, name, age, bounty}: Character) {

    return (
        <div className="bg-gray-700 max-w-md p-4 rounded-xl">
            <h1>One Piece Character Info</h1>
            <h2><strong>ID:</strong> {id}</h2>
            <h2><strong>Name:</strong> {name}</h2>
            <h2><strong>Age:</strong> {age}</h2>
            <h2><strong>Bounty:</strong> {bounty}</h2>
        </div>
    )
}