import { useState } from "react";
import CityBubble from "./CityBubble";
import { tripData } from "../../data/trips";
import moment from "moment";
import { ImageProps } from "../../utils/types";
import TripPreviewCard from "../TripPreviewCard";

declare type TimelineEntryProps = {
  trip: tripData;
  thumbnail: ImageProps;
  index: number;
};

const TopLevelTimelineEntry = ({
  trip,
  thumbnail,
  index,
}: TimelineEntryProps) => {
  const [expanded, setExpanded] = useState(false);

  const TripPreviewCardWithProps = () => (
    <TripPreviewCard
      trip={trip}
      thumbnail={thumbnail}
      timelineMode
      timelineProps={{ expanded, expandToggleClicked: toggleExpanded }}
    />
  );

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const formatDate = (dateString: string) => {
    return moment(dateString).format("D MMMM YYYY");
  };

  return (
    <>
      <div className="right-timeline flex w-full items-center p-0 md:justify-between">
        <div className="right-9/10 absolute z-20 order-1 h-4 w-4 translate-x-1/2 rounded-full bg-primary shadow-xl md:right-1/2" />
        <div className="spacer w-12 md:hidden"></div>
        <div className="order-1 block w-full rounded-lg px-6 py-4 shadow-xl md:hidden md:w-6/12">
          <TripPreviewCardWithProps />
        </div>
        <div className="order-1 hidden px-6 py-4 md:block md:w-6/12">
          {index % 2 == 0 ? (
            <TripPreviewCardWithProps />
          ) : (
            <h3 className="text-xl font-bold text-white text-right">
              {formatDate(trip.startDate)}
            </h3>
          )}
        </div>
        <div className="order-1 hidden px-6 py-4 md:block md:w-6/12">
          {index % 2 == 0 ? (
            <h3 className="text-xl font-bold text-white">
              {formatDate(trip.startDate)}
            </h3>
          ) : (
            <TripPreviewCardWithProps />
          )}
        </div>
      </div>

      {expanded && (
        <>
          <CityBubble />
          <CityBubble />
          <CityBubble />
        </>
      )}
    </>
  );
};

export default TopLevelTimelineEntry;
