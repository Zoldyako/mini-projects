import { Character } from '../../types/index'

export default function CharacterCard({id, name, age, bounty}: Character) {

    return (
        <div className="flex justify-between text-gray-300 bg-zinc-800 w-full py-2 px-4 outline outline-gray-500 hover:bg-zinc-700">
            <h2 className='w-16 p-1'>{id}</h2>
            <h2 className='w-52 p-1'>{name}</h2>
            <h2 className='w-28 p-1'>{age}</h2>
            <h2 className='w-48 p-1'>{bounty}</h2>
        </div>
    )
}