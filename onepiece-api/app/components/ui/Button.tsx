export default function Button({
    text,
    handleClick,
}: {
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            className='btn bg-sky-600 font-bold py-2 px-4 rounded-xl border-2 border-blue-400 hover:bg-sky-500 hover:border-blue-200 active:bg-sky-700 active:border-blue-900 '
            onClick={handleClick}>
            {text}
        </button>
    );
}
