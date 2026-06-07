import Header from "@/app/components/layout/Header";
import SearchBar from "@/app/components/ui/SearchBar";
import GameCard from "@/app/game/GameCard";
import { games } from "@/app/data/games";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <div className="mx-auto max-w-6xl p-8">
        <SearchBar />

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            Trending Games
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {games.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                genre={game.genre}
                year={game.year}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}