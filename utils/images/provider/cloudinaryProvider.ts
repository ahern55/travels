import cloudinary from "cloudinary";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import type { ImageProps } from "../../types";

// @ts-ignore
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const getImagesFromPathCloudinary = async (path?: string) => {
  const result = await cloudinary.v2.search
    .expression(
      `folder:${process.env.CLOUDINARY_FOLDER}${path ? `/${path}` : ""}/*`
    )
    .sort_by("public_id", "asc")
    .max_results(400)
    .execute();

  return getReducedImagesFromCloudinaryResults(result);
};

export const getImagesWithTagCloudinary = async (
  tag: string,
  path?: string
) => {
  const result = await cloudinary.v2.search
    .expression(
      `folder:${process.env.CLOUDINARY_FOLDER}${
        path ? `/${path}` : ""
      }/* AND tags=${tag}`
    )
    .sort_by("created_at", "asc")
    .max_results(400)
    .execute();

  return getReducedImagesFromCloudinaryResults(result);
};

const getReducedImagesFromCloudinaryResults = async (results: any) => {
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

const cache = new Map<ImageProps, string>();

export const getBase64ImageUrl = async (image: ImageProps): Promise<string> => {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
  );
  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  });

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;
  cache.set(image, url);
  return url;
};

export const getImageSourceCloudinary = (publicId: string, format: string) => {
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${publicId}.${format}`;
};
