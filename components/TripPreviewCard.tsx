import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { capitalizeWordFirstLetter } from "../utils/genericUtils";
import Image from "next/image";
import { ImageProps } from "../utils/types";
import { tripData } from "../data/trips";
import { Grid } from "@mui/material";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../styles/muiStyles";

declare type TripCardProps = {
  trip: tripData;
  thumbnail: ImageProps;
};

const getImageSource = (id: string, format: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_240,h_160/${id}.${format}`;

export default function TripPreviewCard({ trip, thumbnail }: TripCardProps) {
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formatDate = (dateString: string) => {
    return moment(dateString).format(mobile ? "DD/MM/YYYY" : "DD MMMM YYYY");
  };

  return (
    <Card
      sx={{
        display: "flex",
        background: "transparent",
        m: ".5rem",
        "&:hover": {
          backgroundColor: "#242424",
        },
        borderColor: "#242424",
        borderWidth: 1,
      }}
      variant="outlined"
    >
      <Image
        src={getImageSource(thumbnail.public_id, thumbnail.format)}
        alt="thumbnail"
        width={150}
        height={10}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography component="div" variant="h6" color="white">
                {capitalizeWordFirstLetter(trip.name)} {trip.icon}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="h6" color="white">
                {formatDate(trip.startDate)} →{" "}
                {trip.endDate ? formatDate(trip.endDate) : "Present"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
}
