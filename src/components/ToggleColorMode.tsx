import * as React from "react";
import { IconButton, PaletteMode } from "@mui/material";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <IconButton
      color="primary"
      aria-label="button to toggle theme"
      size="large"
      onClick={toggleColorMode}
    >
      {mode === "dark" ? (
        <WbSunnyOutlinedIcon fontSize="large" />
      ) : (
        <BedtimeOutlinedIcon fontSize="large" />
      )}
    </IconButton>
  );
}

export default ToggleColorMode;
