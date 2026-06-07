import Link from "next/link";

type GameCardProps = {
  id: number;
  title: string;
  genre: string;
  year: number;
};

export default function GameCard({
  id,
  title,
  genre,
  year,
}: GameCardProps) {
  return (
    <Link href={`/game/${id}`}>
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition hover:border-zinc-600 hover:scale-[1.02]">
        <div className="aspect-[3/4] bg-zinc-800" />

        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-1 text-sm text-zinc-400">
            {genre}
          </p>

          <p className="text-sm text-zinc-500">
            {year}
          </p>
        </div>
      </div>
    </Link>
  );
}