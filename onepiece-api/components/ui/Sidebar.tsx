import Link from 'next/link';

export default function SideBar() {
    return (
        <div className='fixed top-0 left-0 w-64 h-screen px-12 py-6 bg-zinc-900'>
            <h2 className='text-3xl font-bold mb-8'><Link href='/'>OneSearch</Link></h2>
            <div>
                <li className='flex flex-col list-none gap-4 font-bold text-gray-400'>
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
