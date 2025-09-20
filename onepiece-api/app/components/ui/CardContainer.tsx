export default function CardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col items-start bg-zinc-600 rounded-lg px-8 py-6 pb-8 max-w-sm shadow-2xl'>
            {children}
        </div>
    );
}
