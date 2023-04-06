import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import trips from "../../data/trips";
import CountryCard from "../../components/CountryCard";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const CountryGallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trips</title>
      </Head>
      <main>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Grid container spacing={0}>
            {trips.map((country) => (
              <Grid item xs={12} md={6}>
                <CountryCard country={country} />
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
