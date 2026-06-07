export default function Header() {
    return (
        <header className="border-b border-zinc-800">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
                <h1 className="text-2xl font-bold">Checkpoint</h1>

                <button className="rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700">
                    Profile
                </button>
            </div>
        </header>
    );
}
