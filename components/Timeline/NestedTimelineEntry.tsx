import { useMediaQuery } from "@mui/material";
import theme from "../../styles/muiStyles";

declare type NestedTimelineEntryProps = {
  name: string;
  date: string;
  parentLeftOfTimeline?: boolean;
};

const NestedTimelineEntry = ({
  name,
  date,
  parentLeftOfTimeline = false,
}: NestedTimelineEntryProps) => {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div className="flex w-full items-center p-0 md:justify-between">
        <div className="right-9/10 absolute z-20 order-1 h-2 w-2 translate-x-1/2 rounded-full bg-secondary md:right-1/2" />
        {mobile && (
          <>
            <div className="spacer w-12 md:hidden"></div>
            <div className="order-1 w-full px-6 py-4">
              <h3 className="text-l font-bold text-white">
                {name}: {date}
              </h3>
            </div>
          </>
        )}
        {!mobile && (
          <>
            <div className="order-1 w-6/12 px-6 py-4 text-right">
              <h3 className="text-l font-bold text-white">
                {parentLeftOfTimeline ? name : date}
              </h3>
            </div>
            <div className="order-1 w-6/12 px-6 py-4">
              <h3 className="text-l font-bold text-white">
                {parentLeftOfTimeline ? date : name}
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NestedTimelineEntry;
