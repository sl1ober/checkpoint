type GameCardProps = {
    title: string;
    genre: string;
    year: number;
};

export default function GameCard({
    title,
    genre,
    year,
}: GameCardProps) {
    return (
        <div className="rounded-xl border border zinc-800 bg-zinc-900 p-4">
            <div className="aspect-[3/4] rounded-lg bg-zinc-800" />

            <div className="p-4">
                <h3 className="font-semibold">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                    {genre}
                </p>
                
                <p className="text-sm text-zinc-500">
                    {year}
                </p>
            </div>
        </div>
    );
}