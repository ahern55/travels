import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useRouter } from "next/router";
import { SxProps } from "@mui/material";

const actions = [
  {
    icon: "⭐️",
    name: "Home",
    route: "/",
  },
  {
    icon: "📍",
    name: "Trips",
    route: "/trips",
  },
  {
    icon: "⏱️",
    name: "Timeline",
    route: "/timeline",
  },
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

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        bottom: 5,
        right: 5,
      }}
    >
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
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
