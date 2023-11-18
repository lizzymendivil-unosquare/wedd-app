"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { CldUploadButton } from "next-cloudinary";

import { useScopedI18n } from "@/locales/client";

export default function UploadButton() {
  const router = useRouter();
  const t = useScopedI18n("gallery");

  return (
    <div className="flex items-center justify-between">
      <p>{t("question")}</p>
      <div
        className="bg-purple-300 hover:bg-purple-600  hover:text-white text-gray-800 font-bold py-2
      px-4 rounded inline-flex items-center"
      >
        <CldUploadButton
          onUpload={() =>
            setTimeout(() => {
              router.refresh();
            }, 2000)
          }
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
        >
          <div className="flex gap-2 items-center">
            <Icon icon="lucide:upload" />
            {t("button")}
          </div>
        </CldUploadButton>
      </div>
    </div>
  );
}
