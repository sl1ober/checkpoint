import Header from "@/app/components/layout/Header";
import SearchBar from "@/app/components/ui/SearchBar";
import GameCard from "@/app/components/game/GameCard";

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
            <GameCard title="Elden Ring" />
            <GameCard title="Cyberpunk 2077" />
            <GameCard title="Baldur's Gate 3" />
            <GameCard title="Metro Exodus" />
            <GameCard title="Resident evil 4" />
          </div>
        </section>
      </div>
    </main>
  );
}