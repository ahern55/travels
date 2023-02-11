import cloudinary from "cloudinary";
import type { ImageProps } from "../utils/types";
import getBase64ImageUrl from "./generateBlurPlaceholder";

// @ts-ignore
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const getImagesFromPath = async (path?: string) => {
  return await cloudinary.v2.search
    .expression(
      `folder:${process.env.CLOUDINARY_FOLDER}${path ? `/${path}` : ""}/*`
    )
    .sort_by("public_id", "asc")
    .max_results(400)
    .execute();
};

export const getReducedImagesForPhotoGalleryFromPath = async (
  path?: string
) => {
  const results = await getImagesFromPath(path);
  let reducedResults: ImageProps[] = [];

  let i = 0;

  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return reducedResults;
};

export default cloudinary;
