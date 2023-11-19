import { Twinkle_Star } from "next/font/google";

const twinkleStar = Twinkle_Star({ subsets: [], weight: "400" });

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`xs:pt-3 xs:pb-3 sm:pb-7 xxs:text-3xl sm:text-4xl md:text-5xl text-center ${twinkleStar.className}`}
    >
      {children}
    </h1>
  );
}
