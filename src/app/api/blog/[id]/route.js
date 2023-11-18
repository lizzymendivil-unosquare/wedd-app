import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  const message = await prisma.guestbook.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(message);
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const messageUpdated = await prisma.guestbook.update({
      where: {
        id: Number(params.id),
      },
      data,
    });

    return NextResponse.json(messageUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request, { params }) {
  try {
    const messageRemoved = await prisma.guestbook.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(messageRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
