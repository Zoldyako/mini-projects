import { Character } from '../../types/index'
import Tag from './Tag'

export default function CharacterCard({id, name, job, age, bounty, crew }: Character) {

    return (
        <div className="flex flex-col gap-2 w-75">
            <h2 className='text-3xl font-bold'>{name}</h2>
            <div className='flex gap-1'>
                <Tag children={<p>{id}</p>} />
                <Tag children={<p>{crew.name}</p>}/>
            </div>
            <p>{job}</p>
            <p>{age}</p>
            <p>{bounty}</p>
        </div>
    )
}