const statuses = [
  "Wishlist",
  "Playing",
  "Completed",
  "Paused",
  "Dropped",
];

export default function StatusButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {statuses.map((status) => (
        <button
          key={status}
          className="rounded-lg border border-zinc-700 px-4 py-2 transition hover:border-zinc-500 hover:bg-zinc-800"
        >
          {status}
        </button>
      ))}
    </div>
  );
}