import { useState } from "react";
import CityBubble from "./CityBubble";

const CountryTimelineBubble = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="right-timeline mb-8 flex w-full items-center p-0 md:justify-between">
        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
          className="right-9/10 absolute z-20 order-1 h-6 w-6 translate-x-1/2 cursor-pointer rounded-full bg-red-800 shadow-xl md:right-1/2"
        >
          {/* <h1 className="mx-auto text-lg font-semibold text-white">1</h1> */}
        </div>
        <div className="spacer w-24 md:hidden"></div>
        <div className="order-1 rounded-lg border-2 border-orange-600 px-6 py-4 text-right shadow-xl md:w-5/12">
          <h3 className="text-xl font-bold text-white">Country</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"></p>
        </div>
        <div className="order-1 rounded-lg border-2 border-orange-600 px-6 py-4 text-left shadow-xl md:w-5/12">
          <h3 className=" text-xl font-bold text-white">Dates</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"></p>
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

export default CountryTimelineBubble;
