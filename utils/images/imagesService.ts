import {
  getImageSourceCloudinary,
  getReducedImagesFromPathCloudinary,
} from "./provider/cloudinaryProvider";

export const getReducedImagesFromPath = async (path?: string) => {
  return await getReducedImagesFromPathCloudinary(path);
};

export const getImageSource = (publicId: string, format: string) => {
  return "https://img.freepik.com/free-vector/simple-corn-cartoon_1308-124847.jpg?w=2000";
  return getImageSourceCloudinary(publicId, format);
};
