import {
  getImageSourceCloudinary,
  getReducedImagesFromPathCloudinary,
} from "./provider/cloudinary";

export const getReducedImagesFromPath = async (path?: string) => {
  return await getReducedImagesFromPathCloudinary(path);
};

export const getImageSource = (publicId: string, format: string) => {
  return getImageSourceCloudinary(publicId, format);
};
