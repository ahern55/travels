import { NextPage } from "next";
import Head from "next/head";
import NavigationSpeedDial from "../components/NavigationSpeedDial";
import Footer from "../components/Footer";
import CustomizedTimeline from "../components/Timeline/CustomTimeline";

const Timeline: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta property="og:title" content="Travel Timeline" key="title" />
      </Head>
      <main>
        <CustomizedTimeline />
      </main>
      <NavigationSpeedDial />
      <Footer />
    </>
  );
};

export default Timeline;
