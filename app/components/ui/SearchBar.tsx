export default function SearchBar() {
    return (
        <div className="mt-8">
            <input
                type="text"
                placeholder="Search games..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-zinc-600"
            />
        </div>
    );
}