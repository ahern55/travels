import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { ImageProps } from "../utils/types";
import SharedModal from "./SharedModal";

export default function Modal({
  images,
  index,
  onClose,
}: {
  images: ImageProps[];
  index: number;
  onClose?: () => void;
}) {
  let overlayRef = useRef();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    onClose();
  }

  function changePhotoId(newVal: number) {
    setImageLoaded(false);
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
  }

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        imageLoaded={imageLoaded}
        setImageLoaded={() => setImageLoaded(true)}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
