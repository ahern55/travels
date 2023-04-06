import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import visitedCountries from "../../data/visitedCountries";
import CountryCard from "../../components/CountryCard";
import Box from "@mui/material/Box";

const CountryGallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <main>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {visitedCountries.map((country) => (
            <CountryCard country={country} />
          ))}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default CountryGallery;
