import Image from "next/image";

import { SearchResult } from "@/lib/types";

const MAX_COLUMNS = 4;

export default function ImageGrid({ images }: { images: SearchResult[] }) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map((result) => (
              <Image
                key={result.public_id}
                src={result.secure_url}
                alt="lizzy and braden gallery picture"
                width={500}
                height={300}
                sizes="100vw"
                className="rounded-lg shadow-2xl transition ease-in-out delay-150
                hover:-translate-y-1 hover:scale-110 duration-700"
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}
