import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { I18nProviderClient } from "@/locales/client";

export default function MainLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <div className="flex">
        <Navbar />
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
