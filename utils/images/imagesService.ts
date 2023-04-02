import {
  getImageSourceCloudinary,
  getImagesWithTagCloudinary,
  getImagesFromPathCloudinary,
} from "./provider/cloudinaryProvider";

export const getImagesFromPath = async (path?: string) => {
  return await getImagesFromPathCloudinary(path);
};

export const getImageSource = (publicId: string, format: string) => {
  return "https://img.freepik.com/free-vector/simple-corn-cartoon_1308-124847.jpg?w=2000";
  return getImageSourceCloudinary(publicId, format);
};

export const getFavoriteImages = async () => {
  return await getImagesWithTagCloudinary("favorites");
};
