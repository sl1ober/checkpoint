type GameCardProps = {
    title: string;
};

export default function GameCard({
    title,
}: GameCardProps) {
    return (
        <div className="rounded-xl border border zinc-800 bg-zinc-900 p-4">
            <div className="aspect-[3/4] rounded-lg bg-zinc-800" />

            <h3 className="mt-3 font-semibold">
                {title}
            </h3>
        </div>
    );
}