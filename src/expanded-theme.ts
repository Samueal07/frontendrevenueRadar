// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  // addeing the tokens primary secondary shades to the
  // default ts mui PaletteColor .d.ts file
  interface PaletteColor {
    [key: number]: string;
  }
  // alt click palatte and check Pallter dindt have teriary color
  interface Palette {
    tertiary: PaletteColor;
  }
}
