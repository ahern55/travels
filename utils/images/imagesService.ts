import {
  getImageSourceCloudinary,
  getImagesWithTagCloudinary,
  getImagesFromPathCloudinary,
} from "./provider/cloudinaryProvider";

export const getImagesFromPath = async (path?: string) => {
  return await getImagesFromPathCloudinary(path);
};

export const getFavoriteImages = async () => {
  return await getImagesWithTagCloudinary("favorites");
};

export const getTripThumbnail = async (tripName: string) => {
  return await getImagesWithTagCloudinary("thumbnails", tripName);
};
