import type { NextPage } from "next";
import Head from "next/head";
import type { ImageProps } from "../utils/types";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";
import SpeedDialNavigation from "../components/NavigationSpeedDial";
import { getReducedImagesFromPath } from "../utils/images/imagesService";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <Head>
        <title>Travels</title>
        <meta property="og:title" content="Travels" key="title" />
      </Head>
      <main>
        <PhotoGallery images={images} unoptimized={false} />
      </main>
      <SpeedDialNavigation />
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      images: await getReducedImagesFromPath(),
    },
  };
}
