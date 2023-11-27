import { authOptions } from "@/app/utils/auth";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { I18nProviderClient } from "@/locales/client";
import { getServerSession } from "next-auth";

export default async function MainLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <I18nProviderClient locale={locale}>
      <div className="flex">
        <Navbar session={session} />
        <main className="flex-1 bg-zinc-100 xs:pt-14 sm:pt-14 md:pt-12">
          <div className="w-full h-screen mx-auto bg-purple-700 flex flex-col items-center justify-center text-center">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </I18nProviderClient>
  );
}
