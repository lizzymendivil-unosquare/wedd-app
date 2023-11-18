import { MessageProps } from "@/lib/props";

export default function ShowMessage({ id, name, message }: MessageProps) {
  return (
    <div className="rounded-lg bg-purple-200 p-3">
      <p className="tracking-wide">{message}</p>
      <p className="italic text-end mt-4 text-sm text-gray-700">{name}</p>
    </div>
  );
}
