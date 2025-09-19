export default function Button({
    text,
    handleClick,
}: {
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            className='btn bg-sky-600 text-gray-950 font-bold py-2 px-4 rounded-xl hover:bg-sky-900'
            onClick={handleClick}>
            {text}
        </button>
    );
}
