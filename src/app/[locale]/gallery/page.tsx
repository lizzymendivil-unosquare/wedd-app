import cloudinary from "cloudinary";

import UploadButton from "@/components/image/upoload-button";
import Title from "@/components/common/title";
import ImageGrid from "@/components/image/image-grid";
import { SearchResult } from "@/lib/types";
import { getScopedI18n } from "@/locales/server";

export default async function GalleryPage() {
  const t = await getScopedI18n("gallery");

  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .execute()) as { resources: SearchResult[] };

  return (
    <>
      <Title>{t("title")}</Title>

      <UploadButton />
      <div className="flex flex-col gap-8">
        <section className="flex justify-between py-6">
          <ImageGrid images={results.resources} />
        </section>
      </div>
    </>
  );
}
