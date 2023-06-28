"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import DiamondIcon from "@mui/icons-material/Diamond";

{
  /* Custom Box component FlexBetween */
}
const Navbar = () => {
  // custom made theme.ts
  const { palette } = useTheme();
  //highliting the page we are on
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/*LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <DiamondIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          RevenueRadar
        </Typography>
      </FlexBetween>

      {/*RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        {/* box for going to predictions */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
