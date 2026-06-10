"use client";

import { useEffect, useState } from "react";
import StatusButtons from "./StatusButtons";
import RatingSelector from "./RatingSelector";
import {
  getUserGames,
  saveUserGames,
} from "@/app/lib/storage";

type GameActionsProps = {
  gameId: number;
};

export default function GameActions({
  gameId,
}: GameActionsProps) {
  const [status, setStatus] =
    useState<string | null>(null);

  const [rating, setRating] =
    useState<number | null>(null);

  // Загружаем данные для текущей игры
  useEffect(() => {
    const userGames = getUserGames();

    const savedGame = userGames.find(
      (game) => game.gameId === gameId
    );

    if (savedGame) {
      setStatus(savedGame.status);
      setRating(savedGame.rating);
    }
  }, [gameId]);

  // Сохраняем данные при изменении статуса или рейтинга
  useEffect(() => {
    const userGames = getUserGames();

    const existingGame = userGames.find(
      (game) => game.gameId === gameId
    );

    if (existingGame) {
      existingGame.status = status;
      existingGame.rating = rating;
    } else {
        console.log("Saving game:", {
            gameId,
            status,
            rating
        });
        
      userGames.push({
        gameId,
        status,
        rating,
      });
    }

    saveUserGames(userGames);
  }, [gameId, status, rating]);

  return (
    <>
      <StatusButtons
        selectedStatus={status}
        onStatusChange={setStatus}
      />

      <RatingSelector
        rating={rating}
        onRatingChange={setRating}
      />
    </>
  );
}