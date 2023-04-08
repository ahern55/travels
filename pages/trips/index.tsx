import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import TripPreviewCard from "../../components/TripPreviewCard";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Link from "next/link";
import NavigationSpeedDial from "../../components/NavigationSpeedDial";
import { ImageProps } from "../../utils/types";
import trips from "../../data/trips";
import { getTripThumbnail } from "../../utils/images/imagesService";

const TripsOverviewPage: NextPage = ({
  trips,
}: {
  trips: { name: string; thumbnail: ImageProps }[];
}) => {
  return (
    <>
      <Head>
        <title>Trips</title>
      </Head>
      <main>
        <Box sx={{ display: "flex", alignItems: "center", p: 2, pb: 10 }}>
          <Grid container spacing={0}>
            {trips.map((trip) => (
              <Grid item xs={12} md={6} key={trip.name}>
                <Link href={`/trips/${trip.name}`}>
                  <TripPreviewCard
                    name={trip.name}
                    thumbnail={trip.thumbnail}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
      <NavigationSpeedDial />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const promises = trips.map(async (trip) => {
    return {
      name: trip.name,
      thumbnail: (await getTripThumbnail(trip.name)).at(0),
    };
  });

  return {
    props: {
      trips: await Promise.all(promises),
    },
  };
}

export default TripsOverviewPage;
