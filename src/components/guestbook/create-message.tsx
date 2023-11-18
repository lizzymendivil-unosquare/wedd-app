"use client";

import { toast } from "react-hot-toast";

import createMessage from "@/actions/create-message";
import { MessageSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useScopedI18n } from "@/locales/client";

const CreateMessage = () => {
  const t = useScopedI18n("guestbook");
  const { register, reset } = useForm({
    resolver: zodResolver(MessageSchema),
  });
  const clientAction = async (formData: FormData) => {
    const newMessage = {
      name: formData.get("name"),
      message: formData.get("message"),
      isPrivate: formData.get("private") === null ? false : true,
    };

    const result = MessageSchema.safeParse(newMessage);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ";
      });

      toast.error(errorMessage);
      return;
    }
    const reponse = await createMessage(result.data);
    if (reponse?.error) {
      toast.error(reponse.error);
    } else {
      toast.success("Thank you for sending us your love ❤️ ");
    }

    reset();
  };

  return (
    <form
      id="submitMessageForm"
      action={clientAction}
      className="mx-auto max-w-xl py-6"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {t("name_label")}*
          </label>
          <div className="mt-2.5">
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              required
              className="block w-full
          rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {t("message_label")}*
          </label>
          <div className="mt-2.5">
            <textarea
              {...register("message")}
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900
          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-700
          sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>

        <div className="sm:col-span-2">
          <input
            {...register("private")}
            id="private"
            name="private"
            type="checkbox"
            className=" hover:cursor-pointer relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem]
            w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300
            outline-none checked:bg-purple-700 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px
            checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem]
            checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0"
          />
          <label
            htmlFor="private"
            className="pl-2 inline-block text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
          >
            {t("private_label")}
          </label>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="block w-full rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 transition duration-700"
        >
          {t("send_button")}
        </button>
      </div>
    </form>
  );
};

export default CreateMessage;
