import { games } from "@/app/data/games";
import { UserGame } from "@/app/types/user-game";

type LibrarySectionProps = {
    title: string;
    gameList: UserGame[];
};

export default function LibrarySection({
    title,
    gamesList,
}: LibrarySectionProps) {
    return (
        <section className="mt-10">
            <h2 className="mb-4 text-2x1 font-bold">
                {title} ({gamesList.length})
            </h2>

            <div className="space-y-4">
                {gamesList.map((userGame) => {
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
                            <h3 className="text-xl font-bold">
                                {game.title}
                            </h3>

                            <p className="text-zinc-400">
                                Rating: {userGame.rating}/10
                            </p>
                        </div>    
                    );
                })}
            </div>
        </section>
    );
}