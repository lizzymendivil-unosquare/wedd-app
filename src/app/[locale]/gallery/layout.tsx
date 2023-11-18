"use client";

import MarginWidthWrapper from "@/components/common/margin-width-wrapper";
import PageWrapper from "@/components/common/page-wrapper";
import { I18nProviderClient } from "@/locales/client";

export default function GalleryLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <MarginWidthWrapper>
        <PageWrapper>{children}</PageWrapper>
      </MarginWidthWrapper>
    </I18nProviderClient>
  );
}
