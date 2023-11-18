import Title from "@/components/common/title";
import Timeline from "@/components/story/timeline";
import { getScopedI18n } from "@/locales/server";

export default async function OurStoryPage() {
  const t = await getScopedI18n("story");

  return (
    <>
      <Title>{t("title")}</Title>

      <Timeline />
    </>
  );
}
