import { UserGame } from "@/app/types/user-game";

const STORAGE_KEY = "checkpoint-user-games";

export function getUserGames(): UserGame[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveUserGames(
  userGames: UserGame[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(userGames)
  );
}