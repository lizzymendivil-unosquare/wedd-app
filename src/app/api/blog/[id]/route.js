import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  // const message = await prisma.guestbook.findUnique({
  //   where: {
  //     id: Number(params.id),
  //   },
  // });

  // return NextResponse.json(message);
  const post = await prisma.post.findUnique({
    where: {
      // id: Number(params.id),
      id: params.id,
    },
  });

  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  try {
    // const data = await request.json();
    // const messageUpdated = await prisma.guestbook.update({
    //   where: {
    //     id: Number(params.id),
    //   },
    //   data,
    // });

    // return NextResponse.json(messageUpdated);
    const { title, slug, author, mainImage, body } = await request.json();
    const postUpdated = await prisma.post.update({
      where: {
        id: params.id,
      },
      data: { title, slug, author, mainImage, body },
    });

    return NextResponse.json(postUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request, { params }) {
  // try {
  //   const messageRemoved = await prisma.guestbook.delete({
  //     where: {
  //       id: Number(params.id),
  //     },
  //   });

  //   return NextResponse.json(messageRemoved);
  // } catch (error) {
  //   return NextResponse.json(error.message);
  // }
  try {
    const postRemoved = await prisma.post.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(postRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
