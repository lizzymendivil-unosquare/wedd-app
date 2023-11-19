"use client";

import { useScopedI18n } from "@/locales/client";
import { Icon } from "@iconify/react";

export default function Timeline() {
  const t = useScopedI18n("story");

  return (
    <div className="px-6">
      <ol className="relative border-s">
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100"
          >
            <Icon icon="game-icons:cupidon-arrow" />
          </span>
          <h3 className="ml-3 flex items-center mb-1 xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_first")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0  text-sm font-normal leading-none text-gray-400 ">
            {t("story_first_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_first_description")}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100"
          >
            <Icon icon="emojione-v1:couple-with-heart" />
          </span>
          <h3 className="ml-3 flex items-center mb-1 xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_second")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0  text-sm font-normal leading-none text-gray-400 ">
            {t("story_second_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_second_description")}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100 "
          >
            <Icon icon="clarity:building-solid" />
          </span>
          <h3 className="ml-3 flex items-center mb-1 xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_third")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0  text-sm font-normal leading-none text-gray-400 ">
            {t("story_third_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_third_description")}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100 "
          >
            <Icon icon="material-symbols:family-home" />
          </span>
          <h3 className="ml-3 flex items-center mb-1 xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_fourth")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0  text-sm font-normal leading-none text-gray-400 ">
            {t("story_fourth_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_fourth_description")}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100 "
          >
            <Icon icon="material-symbols:family-home-outline" />
          </span>
          <h3 className="ml-3 flex items-center mb-1 xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_fifth")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0  text-sm font-normal leading-none text-gray-400 ">
            {t("story_fifth_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_fifth_description")}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100 "
          >
            <Icon icon="mdi:ring" />
          </span>
          <h3 className="ml-3 flex items-center mb-1 xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_sixth")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0 text-sm font-normal leading-none text-gray-400 ">
            {t("story_sixth_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_sixth_description")}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span
            className="absolute flex items-center justify-center w-9 h-9 bg-purple-400
        rounded-full -start-3 ring-8 ring-zinc-100 "
          >
            <Icon icon="noto-v1:bride-with-veil-light-skin-tone" />
          </span>
          <h3 className="ml-3 flex items-center mb-1xxs:text-sm md:text-lg font-semibold text-gray-900 ">
            {t("story_seventh")}
          </h3>
          <time className="block mb-2 xxs:ml-2 md:ml-0 text-sm font-normal leading-none text-gray-400 ">
            {t("story_seventh_date")}
          </time>
          <p className="mb-4 xxs:text-sm md:text-base font-normal text-gray-500 ">
            {t("story_seventh_description")}
          </p>
        </li>
      </ol>
    </div>
  );
}
