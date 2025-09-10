'use client'

export default function Home() {
    return (
        <div>
            <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
                <button onClick={() => alert('Dude you clicked the button')}>Click Me</button>
            </main>
        </div>
    );
}
