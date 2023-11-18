import { Toaster } from "react-hot-toast";

import MarginWidthWrapper from "@/components/common/margin-width-wrapper";
import PageWrapper from "@/components/common/page-wrapper";
import { I18nProviderClient } from "@/locales/client";

export default function GuestBookLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <MarginWidthWrapper>
        <PageWrapper>
          {children} <Toaster position="top-right" />
        </PageWrapper>
      </MarginWidthWrapper>
    </I18nProviderClient>
  );
}
