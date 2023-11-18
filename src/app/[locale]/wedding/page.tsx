import Title from "@/components/common/title";
import CountdownTimer from "@/components/timer/countdown-timer";
import { getScopedI18n } from "@/locales/server";

export default async function WeddingPage() {
  const t = await getScopedI18n("wedding");

  return (
    <>
      <Title>{t("title")}</Title>

      <CountdownTimer />
    </>
  );
}
