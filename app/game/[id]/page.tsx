import { games } from "@/app/data/games";
import { notFound } from "next/navigation";
import StatusButtons from "@/app/components/game/StatusButtons";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GamePage({
  params,
}: PageProps) {
  const { id } = await params;

  const game = games.find(
    (game) => game.id === Number(id)
  );

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="h-96 rounded-xl bg-zinc-800" />

        <h1 className="mt-6 text-4xl font-bold">
          {game.title}
        </h1>

        <p className="mt-2 text-zinc-400">
          {game.genre}
        </p>

        <p className="text-zinc-500">
          {game.year}
        </p>

        <StatusButtons />
      </div>
    </main>
  );
}