import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import visitedCountries from "../data/trips";
import { capitalizeWordFirstLetter } from "../utils/genericUtils";
import { useRouter } from "next/router";
import { SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const actions = [
  {
    icon: "⭐️",
    name: "Home",
    route: "/",
  },
  ...visitedCountries.map((country) => ({
    icon: country.icon,
    name: capitalizeWordFirstLetter(country.name),
    route: `/countries/${country.name}`,
  })),
];

const speedDialStyleProps: SxProps = {
  bgcolor: "transparent",
  fontSize: "1.8rem",
  color: "primary",
  "&:hover": {
    bgcolor: "primary.dark",
  },
};

export default function NavigationSpeedDial() {
  const router = useRouter();
  const [loadingBarVisible, setLoadingBarVisible] = useState(false);

  useEffect(() => {
    setLoadingBarVisible(false);
  }, [router.query]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        bottom: 5,
        right: 5,
      }}
    >
      {/* <CircularProgress
        hidden={true}
        size={"4rem"}
        sx={{
          position: "absolute",
          bottom: 11,
          right: 20,
        }}
      /> */}
      <SpeedDial
        ariaLabel="Navigation"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 25,
        }}
        FabProps={{
          sx: speedDialStyleProps,
        }}
        icon={"🌏"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            FabProps={{
              sx: speedDialStyleProps,
            }}
            onClick={() => {
              router.push(action.route);
              setLoadingBarVisible(true);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
