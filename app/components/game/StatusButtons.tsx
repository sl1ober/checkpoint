const statuses = [
  "Wishlist",
  "Playing",
  "Completed",
  "Paused",
  "Dropped",
];

type StatusButtonsProps = {
  selectedStatus: string | null;
  onStatusChange: (status: string) => void;
};

export default function StatusButtons({
  selectedStatus,
  onStatusChange,
}: StatusButtonsProps) {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={`rounded-lg border px-4 py-2 transition ${
              selectedStatus === status
                ? "border-white bg-white text-black"
                : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {selectedStatus && (
        <p className="mt-4 text-zinc-400">
          Selected status: {selectedStatus}
        </p>
      )}
    </div>
  );
}