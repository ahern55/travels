import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { tripData } from "../data/trips";
import { capitalizeWordFirstLetter } from "../utils/genericUtils";

declare type TripCardProps = {
  trip: tripData;
};

export default function TripPreviewCard({ trip }: TripCardProps) {
  return (
    <Card sx={{ display: "flex", background: "gray", m: ".5rem" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/sample.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {capitalizeWordFirstLetter(trip.name)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
