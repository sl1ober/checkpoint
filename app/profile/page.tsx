"use client";

import { useEffect, useState } from "react";
import { UserGame } from "@/app/types/user-game";
import { getUserGames } from "@/app/lib/storage";
import { games } from "@/app/data/games";
import LibrarySection from "@/app/components/profile/LibrarySection";

export default function ProfilePage() {
  const [userGames, setUserGames] =
    useState<UserGame[]>([]);

  useEffect(() => {
    const savedGames = getUserGames();

    setUserGames(savedGames);
  }, []);

  const completedGames = userGames.filter(
    (game) => game.status === "Completed"
  );

  const playingGames = userGames.filter(
    (game) => game.status === "Playing"
  );

  const wishlistGames = userGames.filter(
    (game) => game.status === "Wishlist"
  );

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">
          My Library
        </h1>

        <p className="mt-4 text-zinc-400">
          Games in library: {userGames.length}
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Completed Games ({completedGames.length})
        </h2>

        <LibrarySection
            title="Completed Games"
            gamesList={completedGames}
        />
      </div>
    </main>
  );
}