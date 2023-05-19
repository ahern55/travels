import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { capitalizeWordFirstLetter } from "../utils/genericUtils";
import Image from "next/image";
import { ImageProps } from "../utils/types";
import { tripData } from "../data/trips";
import { Grid, IconButton, Tooltip } from "@mui/material";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../styles/muiStyles";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PhotoIcon from "@mui/icons-material/Photo";
import Link from "next/link";

declare type TripCardProps = {
  trip: tripData;
  thumbnail: ImageProps;
  timelineMode?: boolean;
  timelineProps?: {
    expanded: boolean;
    expandToggleClicked: () => void;
  };
};

const getImageSource = (id: string, format: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_240,h_160/${id}.${format}`;

export default function TripPreviewCard({
  trip,
  thumbnail,
  timelineMode = false,
  timelineProps = null,
}: TripCardProps) {
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
        height={1}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Grid container p={0.5}>
          <Grid item xs={12}  pl={2}>
            <Typography component="div" variant="h6" color="white">
              {capitalizeWordFirstLetter(trip.name)} {trip.icon}
            </Typography>
          </Grid>
          {timelineMode && mobile && (
            <Grid item xs={12} pl={2}>
              <Typography component="div" variant="h6" color="white">
                {formatDate(trip.startDate)}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} pl={0.5}>
            <Typography component="div" variant="h6" color="white">
              {!timelineMode && (
                <>
                  {formatDate(trip.startDate)} →{" "}
                  {trip.endDate ? formatDate(trip.endDate) : "Present"}
                </>
              )}
              {timelineMode && (
                <>
                  <Tooltip title={timelineProps?.expanded ? "Hide" : "Expand"}>
                    <IconButton
                      color="secondary"
                      onClick={timelineProps.expandToggleClicked}
                    >
                      <UnfoldMoreIcon
                        className={timelineProps?.expanded ? "rotate-90" : ""}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View Photos">
                    <Link href={`/trips/${trip.name}`}>
                      <IconButton color="secondary">
                        <PhotoIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
