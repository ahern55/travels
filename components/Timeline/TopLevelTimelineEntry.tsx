import { useEffect, useState } from "react";
import NestedTimelineEntry from "./NestedTimelineEntry";
import { tripData } from "../../data/trips";
import moment from "moment";
import { ImageProps } from "../../utils/types";
import TripPreviewCard from "../TripPreviewCard";

declare type TimelineEntryProps = {
  trip: tripData;
  thumbnail: ImageProps;
  index: number;
  allCollapsedTime: number;
};

const TopLevelTimelineEntry = ({
  trip,
  thumbnail,
  index,
  allCollapsedTime,
}: TimelineEntryProps) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => setExpanded(false), [allCollapsedTime]);

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
      <div className="flex w-full items-center p-0 md:justify-between">
        <div className="right-9/10 absolute z-20 order-1 h-4 w-4 translate-x-1/2 rounded-full bg-primary md:right-1/2" />
        <div className="spacer w-12 md:hidden"></div>
        <div className="order-1 block w-full rounded-lg px-6 py-4 shadow-xl md:hidden">
          <TripPreviewCardWithProps />
        </div>
        <div className="order-1 hidden px-6 py-4 md:block md:w-6/12">
          {index % 2 == 0 ? (
            <TripPreviewCardWithProps />
          ) : (
            <h3 className="text-right text-xl font-bold text-white">
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
          {trip.cities && (
            <>
              {trip.cities.map((city) => (
                <NestedTimelineEntry
                  key={city.name + city.startDate}
                  parentLeftOfTimeline={index % 2 == 0}
                  {...city}
                />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default TopLevelTimelineEntry;
