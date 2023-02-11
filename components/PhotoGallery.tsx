import Image from "next/image";
import { useState } from "react";
import { PhotoGalleryProps } from "../utils/types";
import Modal from "./Modal";

export default function PhotoGallery({
  images,
  unoptimized,
}: PhotoGalleryProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index: number) => {
    setPhotoIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="mx-auto max-w-[1960px] p-4">
      {modalOpen && (
        <Modal
          index={photoIndex}
          images={images}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      <div className="columns-3 gap-2 lg:columns-4">
        {images.map(({ id, public_id, format, blurDataUrl }) => (
          <div
            key={id}
            onClick={() => openModal(id)}
            className="after:content group relative mb-2 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt="Picture from my travels"
              className="transform brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              unoptimized={unoptimized}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={720}
              height={700}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
