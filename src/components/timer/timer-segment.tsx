export default function TimerSegment({
  time,
  label,
}: {
  time: number;
  label: string;
}) {
  return (
    <div className="p-4 bg-purple-700 text-white justify-center">
      <div className="rounded-lg bg-black p-2 m-2 border-white-400">
        <div className="text-white text-3xl">
          {time.toString().length === 1 ? 0 + "" + time : time}
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}
