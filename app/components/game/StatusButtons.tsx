"use client";

import { useState } from "react";

const statuses = [
  "Wishlist",
  "Playing",
  "Completed",
  "Paused",
  "Dropped",
];

export default function StatusButtons() {
  const [selectedStatus, setSelectedStatus] =
    useState<string | null>(null);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
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