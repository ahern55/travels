import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import trips from "../../data/trips";
import TripPreviewCard from "../../components/TripPreviewCard";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Link from "next/link";

const CountryGallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trips</title>
      </Head>
      <main>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Grid container spacing={0}>
            {trips.map((trip) => (
              <Grid item xs={12} md={6}>
                <Link href={`/trips/${trip.name}`}>
                  <TripPreviewCard trip={trip} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default CountryGallery;
