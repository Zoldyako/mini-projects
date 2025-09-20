import Link from 'next/link';

export default function SideBar() {
    return (
        <div className='flex flex-col gap-8 min-w-3xs h-svh px-12 py-6 bg-zinc-900'>
            <h2 className='text-3xl font-bold'><Link href='/'>OneSearch</Link></h2>
            <div>
                <li className='flex flex-col list-none gap-2 font-bold text-gray-400'>
                    <ul className="hover:text-sky-500"><Link href='/characters'>Characters</Link></ul>
                    <ul className="hover:text-sky-500"><Link href='/fruits'>Devil Fruits</Link></ul>
                    <ul className="hover:text-sky-500"><Link href='/crews'>Pirate Crews</Link></ul>
                    <ul className="hover:text-sky-500"><Link href='/sagas'>Sagas</Link></ul>
                    <ul className="hover:text-sky-500"><Link href='/ships'>Ships</Link></ul>
                </li>
            </div>
        </div>
    );
}
