'use client'

function btnTest(): void {
    alert('testing button');
}

export default function Home() {
    return (
        <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
            <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
                <div>
                    <button className='bg-blue-500 btn btn-blue hover:bg-blue-700 font-bold p-4 rounded'
                    onClick={btnTest}>Button</button>
                </div>
            </main>
            <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
                <p>in development :0</p>
            </footer>
        </div>
    );
}
