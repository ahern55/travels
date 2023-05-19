import { NextPage } from "next";
import Head from "next/head";
import NavigationSpeedDial from "../components/NavigationSpeedDial";
import Footer from "../components/Footer";
import tripss, { tripData } from "../data/trips";
import { getTripThumbnail } from "../utils/images/imagesService";
import TopLevelTimelineEntry from "../components/Timeline/TopLevelTimelineEntry";
import Link from "next/link";
import TripPreviewCard from "../components/TripPreviewCard";
import { ImageProps } from "../utils/types";

const Timeline: NextPage = ({
  trips,
}: {
  trips: { tripData: tripData; thumbnail: ImageProps }[];
}) => {
  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta property="og:title" content="Travel Timeline" key="title" />
      </Head>
      <main>
        <div className="container mx-auto h-full w-full">
          <div className="wrap relative h-full overflow-hidden p-2 lg:p-10">
            <div className="border-2-2 right-9/10 absolute h-full translate-x-1/2 border border-gray-100 border-opacity-60 md:right-1/2"></div>
            {trips.map((tripWithThumbnail, index) => (
              <TopLevelTimelineEntry
                key={tripWithThumbnail.tripData.name}
                index={index}
                trip={tripWithThumbnail.tripData}
                thumbnail={tripWithThumbnail.thumbnail}
              />
            ))}
          </div>
        </div>
      </main>
      <NavigationSpeedDial />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const promises = tripss.map(async (trip) => {
    return {
      tripData: trip,
      thumbnail: (await getTripThumbnail(trip.name)).at(0),
    };
  });

  return {
    props: {
      trips: await Promise.all(promises),
    },
  };
}

export default Timeline;
