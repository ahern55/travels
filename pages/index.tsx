import type { NextPage } from "next";
import Head from "next/head";
import cloudinary, {
  getImagesFromPath,
  getReducedImagesForPhotoGalleryFromPath,
} from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <Head>
        <title>Travels</title>
        <meta property="og:title" content="Travels" key="title" />
      </Head>
      <main>
        <PhotoGallery images={images} optimizeImages />
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      images: await getReducedImagesForPhotoGalleryFromPath(),
    },
  };
}
