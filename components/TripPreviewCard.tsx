import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { tripData } from "../data/trips";
import { capitalizeWordFirstLetter } from "../utils/genericUtils";
import Image from "next/image";
import { ImageProps } from "../utils/types";

declare type TripCardProps = {
  name: string;
  thumbnail: ImageProps;
};

const getImageSource = (id: string, format: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_240,h_160/${id}.${format}`;

export default function TripPreviewCard({ name, thumbnail }: TripCardProps) {
  return (
    <Card sx={{ display: "flex", background: "gray", m: ".5rem" }}>
      <Image
        src={getImageSource(thumbnail.public_id, thumbnail.format)}
        alt="thumbnail"
        width={150}
        height={10}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {capitalizeWordFirstLetter(name)}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
