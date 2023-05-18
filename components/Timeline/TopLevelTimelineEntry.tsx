import { useState } from "react";
import CityBubble from "./CityBubble";
import { tripData } from "../../data/trips";
import { capitalizeAllWords } from "../../utils/genericUtils";
import moment from "moment";
import { ImageProps } from "../../utils/types";
import TripPreviewCard from "../TripPreviewCard";

declare type TripCardProps = {
  trip: tripData;
  thumbnail: ImageProps;
  index: number;
};

const TopLevelTimelineEntry = ({ trip, thumbnail, index }: TripCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    return moment(dateString).format("DD MMMM YYYY");
  };

  return (
    <>
      <div className="right-timeline flex w-full items-center p-0 md:justify-between">
        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
          className="right-9/10 absolute z-20 order-1 h-4 w-4 translate-x-1/2 cursor-pointer rounded-full bg-primary shadow-xl md:right-1/2"
        >
          {/* <h1 className="mx-auto text-lg font-semibold text-white">1</h1> */}
        </div>
        <div className="spacer w-12 md:hidden"></div>
        <div className="order-1 block w-full rounded-lg px-6 py-4 shadow-xl md:hidden md:w-6/12">
          <TripPreviewCard trip={trip} thumbnail={thumbnail} />
        </div>
        <div className="order-1 hidden w-full rounded-lg px-6 py-4 shadow-xl md:block md:w-6/12">
          {index % 2 == 0 ? (
            <TripPreviewCard trip={trip} thumbnail={thumbnail} />
          ) : (
            <h3 className="text-xl font-bold text-white">
              {/* {formatDate(trip.startDate)} */}
            </h3>
          )}
        </div>
        <div className="order-1 hidden px-6 py-4 shadow-xl md:block md:w-6/12">
          {index % 2 == 0 ? (
            <h3 className="text-xl font-bold text-white">
              {/* {formatDate(trip.startDate)} */}
            </h3>
          ) : (
            <TripPreviewCard trip={trip} thumbnail={thumbnail} />
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
