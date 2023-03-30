import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PhotoGallery from "../../components/PhotoGallery";
import visitedCountries from "../../data/visitedCountries";
import { capitalizeWordFirstLetter } from "../../utils/genericUtils";
import { ImageProps } from "../../utils/types";
import Footer from "../../components/Footer";
import SpeedDialNavigation from "../../components/NavigationSpeedDial";
import { getImagesFromPath } from "../../utils/images/imagesService";

const CountryGallery: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { countryName } = router.query;

  return (
    <>
      <Head>
        <title>{capitalizeWordFirstLetter(countryName as string)}</title>
      </Head>
      <main>
        <PhotoGallery images={images} unoptimized />
      </main>
      <SpeedDialNavigation />
      <Footer />
    </>
  );
};

export default CountryGallery;

export async function getStaticProps({ params }) {
  return {
    props: {
      images: await getImagesFromPath(params.countryName),
    },
  };
}

export async function getStaticPaths() {
  const fullPaths = visitedCountries.map((country) => ({
    params: { countryName: country.name },
  }));

  return {
    paths: fullPaths,
    fallback: false,
  };
}
