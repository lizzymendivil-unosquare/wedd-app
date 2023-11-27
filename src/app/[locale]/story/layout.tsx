import type { Metadata } from "next";

import MarginWidthWrapper from "@/components/common/margin-width-wrapper";
import PageWrapper from "@/components/common/page-wrapper";
import { I18nProviderClient } from "@/locales/client";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function StoryLayout({
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
