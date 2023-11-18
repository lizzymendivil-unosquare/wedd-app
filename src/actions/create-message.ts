"use server";

import { prisma } from "@/db";
import { MessageSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";

export default async function createMessage(newMessage: unknown) {
  const result = MessageSchema.safeParse(newMessage);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });

    return {
      error: errorMessage,
    };
  }

  await prisma.guestbook.create({
    data: result.data,
  });

  revalidatePath("/guestbook");
}
