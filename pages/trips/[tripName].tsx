import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PhotoGallery from "../../components/PhotoGallery";
import visitedCountries from "../../data/trips";
import { capitalizeWordFirstLetter } from "../../utils/genericUtils";
import { ImageProps } from "../../utils/types";
import Footer from "../../components/Footer";
import SpeedDialNavigation from "../../components/NavigationSpeedDial";
import { getImagesFromPath } from "../../utils/images/imagesService";

const TripGallery: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { tripName } = router.query;

  return (
    <>
      <Head>
        <title>{capitalizeWordFirstLetter(tripName as string)}</title>
      </Head>
      <main>
        <PhotoGallery images={images} unoptimized />
      </main>
      <SpeedDialNavigation />
      <Footer />
    </>
  );
};

export default TripGallery;

export async function getStaticProps({ params }) {
  return {
    props: {
      images: await getImagesFromPath(params.tripName),
    },
  };
}

export async function getStaticPaths() {
  const fullPaths = visitedCountries.map((trip) => ({
    params: { tripName: trip.name },
  }));

  return {
    paths: fullPaths,
    fallback: false,
  };
}
