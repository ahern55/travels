import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import TripPreviewCard from "../../components/TripPreviewCard";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Link from "next/link";
import NavigationSpeedDial from "../../components/NavigationSpeedDial";
import { ImageProps } from "../../utils/types";
import trips, { tripData } from "../../data/trips";
import { getTripThumbnail } from "../../utils/images/imagesService";
import { useState } from "react";
import TripList from "../../components/TripList";
import Timeline from "../../components/Timeline/Timeline";

const TripsOverviewPage: NextPage = ({
  trips,
}: {
  trips: { tripData: tripData; thumbnail: ImageProps }[];
}) => {
  const [listSelected, setListSelected] = useState(false);

  const selectedOptionClassName =
    "text-xl font-bold text-white underline underline-offset-4 cursor-pointer";
  const unselectedOptionClassName =
    "text-xl font-bold text-gray-400 cursor-pointer hover:text-gray-200";

  return (
    <>
      <Head>
        <title>Trips</title>
      </Head>
      <main>
        <div className="flex w-full items-center justify-between pt-4">
          <div className="w-1/2 px-2 text-right">
            <h3
              className={
                listSelected
                  ? unselectedOptionClassName
                  : selectedOptionClassName
              }
              onClick={() => setListSelected(false)}
            >
              Timeline
            </h3>
          </div>
          <div className="w-1/2 px-2 text-left">
            <h3
              className={
                listSelected
                  ? selectedOptionClassName
                  : unselectedOptionClassName
              }
              onClick={() => setListSelected(true)}
            >
              List
            </h3>
          </div>
        </div>
        {listSelected && <TripList trips={trips} />}
        {!listSelected && <Timeline trips={trips} />}
      </main>
      <NavigationSpeedDial />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const promises = trips.map(async (trip) => {
    return {
      tripData: trip,
      thumbnail: (await getTripThumbnail(trip.name)).at(
        trip.thumbnailIndex ?? 0
      ),
    };
  });

  return {
    props: {
      trips: await Promise.all(promises),
    },
  };
}

export default TripsOverviewPage;
