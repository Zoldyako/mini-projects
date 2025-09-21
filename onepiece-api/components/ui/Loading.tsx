export default function Loading({ isLoading }: { isLoading: boolean }) {
    return (
        <div
            className={`fixed top-4 bg-green-600  px-3 py-1 rounded-lg shadow-xl ${
                isLoading ? '' : 'hidden'
            } `}>
            <p className='font-bold'>Loading</p>
        </div>
    );
}
