import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Link from "next/link";
import TripPreviewCard from "./TripPreviewCard";
import { tripData } from "../data/trips";
import { ImageProps } from "../utils/types";

const TripList = ({
  trips,
}: {
  trips: { tripData: tripData; thumbnail: ImageProps }[];
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", p: 2, pb: 10 }}>
      <Grid container spacing={0}>
        {trips.map((tripWithThumbnail) => (
          <Grid
            item
            xs={12}
            lg={6}
            key={
              tripWithThumbnail.tripData.name +
              tripWithThumbnail.tripData.startDate
            }
          >
            <Link href={`/trips/${tripWithThumbnail.tripData.name}`}>
              <TripPreviewCard
                trip={tripWithThumbnail.tripData}
                thumbnail={tripWithThumbnail.thumbnail}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripList;
