type RatingSelectorProps = {
  rating: number | null;
  onRatingChange: (rating: number) => void;
};

export default function RatingSelector({
  rating,
  onRatingChange,
}: RatingSelectorProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 text-lg font-semibold">
        Your Rating
      </h3>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map(
          (value) => (
            <button
              key={value}
              onClick={() => onRatingChange(value)}
              className={`h-10 w-10 rounded-lg border transition ${
                rating === value
                  ? "border-yellow-400 bg-yellow-400 text-black"
                  : "border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {value}
            </button>
          )
        )}
      </div>

      {rating && (
        <p className="mt-4 text-zinc-400">
          Your rating: {rating}/10
        </p>
      )}
    </div>
  );
}