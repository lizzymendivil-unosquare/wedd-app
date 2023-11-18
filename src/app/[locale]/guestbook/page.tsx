import { prisma } from "@/db";

import ShowMessage from "@/components/guestbook/show-message";
import CreateMessage from "@/components/guestbook/create-message";
import Title from "@/components/common/title";
import { getScopedI18n } from "@/locales/server";

function getMessages() {
  return prisma.guestbook.findMany({
    where: {
      isPrivate: false,
    },
  });
}

export default async function GuestBookPage() {
  const guestbook = await getMessages();
  const t = await getScopedI18n("guestbook");

  return (
    <>
      <Title>{t("title")}</Title>

      <p>{t("message")}</p>

      <CreateMessage />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {guestbook.map((message) => (
            <ShowMessage key={message.id} {...message} />
          ))}
        </div>
      </div>
    </>
  );
}
