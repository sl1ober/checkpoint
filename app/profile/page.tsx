"use client";

import { useEffect, useState } from "react";
import { UserGame } from "@/app/types/user-game";
import { getUserGames } from "@/app/lib/storage";
import { games } from "@/app/data/games";

export default function ProfilePage() {
  const [userGames, setUserGames] =
    useState<UserGame[]>([]);

  useEffect(() => {
    const savedGames = getUserGames();

    setUserGames(savedGames);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">
          My Library
        </h1>

        <p className="mt-4 text-zinc-400">
          Games in library: {userGames.length}
        </p>

        <div className="mt-8 space-y-4">
          {userGames.map((userGame) => {
            const game = games.find(
              (game) => game.id === userGame.gameId
            );

            if (!game) {
              return null;
            }

            return (
              <div
                key={userGame.gameId}
                className="rounded-xl border border-zinc-800 p-4"
              >
                <h2 className="text-xl font-bold">
                  {game.title}
                </h2>

                <p className="text-zinc-400">
                  Status: {userGame.status}
                </p>

                <p className="text-zinc-400">
                  Rating: {userGame.rating}/10
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}