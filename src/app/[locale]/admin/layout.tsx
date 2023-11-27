import { Toaster } from "react-hot-toast";

import MarginWidthWrapper from "@/components/common/margin-width-wrapper";
import PageWrapper from "@/components/common/page-wrapper";
import { I18nProviderClient } from "@/locales/client";
import Navbar from "@/components/admin/navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

export default async function AdminLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  const session: any = await getServerSession(authOptions);
  return (
    <I18nProviderClient locale={locale}>
      {/* <MarginWidthWrapper>
        <PageWrapper>
          {children} <Toaster position="top-right" />
        </PageWrapper>
      </MarginWidthWrapper> */}
      <div className="bg-black">
        <Navbar session={session} />
        <div className="w-full h-screen max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children} <Toaster position="top-right" />
        </div>
      </div>
    </I18nProviderClient>
  );
}
