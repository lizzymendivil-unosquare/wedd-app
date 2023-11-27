import Image from "next/image";

import BackgroundImage from "../../../../public/lizzy-and-braden-cover.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen w-screen flex-col text-white bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden grayscale sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      {children}
    </div>
  );
}
