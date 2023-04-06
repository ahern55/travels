import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { countryData } from "../data/visitedCountries";

declare type CountryCardProps = {
  country: countryData;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Card sx={{ display: "flex", background: "gray", m: ".5rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {country.name}
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
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/sample.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
