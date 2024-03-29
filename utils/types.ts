/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  folder: string;
  format: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  imageLoaded?: boolean;
  setImageLoaded?: () => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}

export interface PhotoGalleryProps {
  images: ImageProps[];
  unoptimized: boolean;
}
