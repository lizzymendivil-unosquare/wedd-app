"use client";

import { PostProps } from "@/lib/props";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import placeholder from "../../../../public/placeholder.jpeg";

// interface postProps {
//   id: string;
//   title: string;
//   body: string;
// }

export default function PostCard({ post }: { post: PostProps }) {
  const router = useRouter();
  const { id, title, mainImage, author, body } = post;
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = () => {
    fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  };
  return (
    // <div
    //   className="bg-amber-400 truncate rounded-xl p-3 hover:bg-amber-100 hover:cursor-pointer"
    //   onClick={() => {
    //     router.push("/admin/blog/edit/" + post.id);
    //   }}
    // >
    //   <h3 className="font-bold text-2xl mb-2">{post.title}</h3>
    //   <p>{post.body}</p>
    // </div>

    <div
      className="w-full truncate bg-white border border-gray-200 
    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          onClick={() => setIsOpen(!isOpen)}
          // data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {isOpen && (
          <div
            id="dropdown"
            className="text-white mt-6 bg-purple-700 rounded-xl inline-grid fixed cursor-default select-none py-2 pl-3 pr-9"
            // className="z-10 hidden text-base list-none
            //  bg-purple-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <Link
                  className="bg-purple-700 text-white hover:bg-amber-400  rounded-md px-3 py-2 text-sm font-medium"
                  href={`/admin/blog/edit/${id}`}
                >
                  Edit
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm
           hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-purple-600"
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center pb-10">
        {/* <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        /> */}
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={mainImage || placeholder}
          alt="post image"
          width={0}
          height={0}
          sizes="100vw"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>

        <div className="text-sm text-gray-500 dark:text-gray-400">{body}</div>
      </div>
    </div>
  );
}
