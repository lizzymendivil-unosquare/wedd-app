import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.guestbook.findMany();

  return NextResponse.json(messages);
}

export async function POST(request) {
  const { name, message, isPrivate } = await request.json();
  const newMessage = await prisma.guestbook.create({
    data: {
      name,
      message,
      isPrivate,
    },
  });

  return NextResponse.json(newMessage);
}

export function PUT() {
  return NextResponse.json({
    message: "...",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "...",
  });
}
