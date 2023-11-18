export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col px-4 pb-4 space-y-2 bg-zinc-100 flex-grow">
      <div className="mx-auto sm:px-8 md:px-36 text-black">{children}</div>
    </div>
  );
}
