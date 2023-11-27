"use client";

import { toast } from "react-hot-toast";

// import createPost from "@/actions/create-post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { MessageSchema } from "@/lib/types";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useScopedI18n } from "@/locales/client";

export default function CreatePost({ id }: { id: string }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    mainImage: "",
    body: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setForm(data);
        });
    }
  }, [id]);

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    router.push("/admin/blog");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const title = e.target.title.value;
    // // const slug = e.target.slug?.value;
    // const author = e.target.author.value;
    // const mainImage = e.target?.mainImage.value;
    // const body = e.target.body.value;

    if (id) {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } else {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    }

    router.push("/admin/blog");
  };
  return (
    <form
      // id="submitPostForm"
      // action={createPostAction}
      onSubmit={handleSubmit}
      // className="mx-auto max-w-xl py-6"
      className="mx-3 mt-6"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Title*
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="title"
              id="title"
              required
              value={form.title}
              onChange={handleChange}
              className="block w-full
          rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* <div className="sm:col-span-2">
          <label
            htmlFor="slug"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Slug*
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="slug"
              id="slug"
              required
              className="block w-full
          rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div> */}

        <div className="sm:col-span-2">
          <label
            htmlFor="author"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Author*
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="author"
              id="author"
              required
              value={form.author}
              onChange={handleChange}
              className="block w-full
          rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="image"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Image
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="mainImage"
              id="mainImage"
              value={form.mainImage}
              onChange={handleChange}
              className="block w-full
          rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="body"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Body*
          </label>
          <div className="mt-2.5">
            <textarea
              name="body"
              id="body"
              rows={10}
              value={form.body}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900
          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-700
          sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      {/* <div className="mt-4">
        <button
          type="submit"
          className="block w-full rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 transition duration-700"
        >
          Create
        </button>
      </div> */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleCancel}
          className="text-sm font-semibold leading-6 text-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm
           hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-purple-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
