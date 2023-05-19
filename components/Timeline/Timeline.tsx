import { tripData } from "../../data/trips";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { ImageProps } from "../../utils/types";
import TopLevelTimelineEntry from "./TopLevelTimelineEntry";

const Timeline = ({
  trips,
}: {
  trips: { tripData: tripData; thumbnail: ImageProps }[];
}) => {
  const [allCollapsedTime, setAllCollapsedTime] = useState(0);

  return (
    <>
      <div className="sticky top-4 z-50 pr-8 text-right text-white">
        <Tooltip title="Collapse All">
          <IconButton
            className="bg-white hover:bg-gray-200"
            color="info"
            onClick={() => {
              setAllCollapsedTime(Date.now());
            }}
          >
            <CloseFullscreenIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="container mx-auto h-full w-full">
        <div className="wrap relative h-full overflow-hidden p-2 lg:p-10">
          <div className="border-2-2 right-9/10 absolute h-full translate-x-1/2 border border-gray-100 border-opacity-60 md:right-1/2"></div>
          {trips.map((tripWithThumbnail, index) => (
            <TopLevelTimelineEntry
              key={
                tripWithThumbnail.tripData.name +
                tripWithThumbnail.tripData.startDate
              }
              index={index}
              trip={tripWithThumbnail.tripData}
              thumbnail={tripWithThumbnail.thumbnail}
              allCollapsedTime={allCollapsedTime}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
