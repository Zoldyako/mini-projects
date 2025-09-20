export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-xs font-bold text-shadow-sm bg-blue-600 py-1 px-2 rounded-sm">
            {children}
        </div>
    )
}