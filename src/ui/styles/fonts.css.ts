import { globalFontFace } from "@vanilla-extract/css";
import { latoFontFamily } from "@/src/ui/styles/constants";

globalFontFace(latoFontFamily, {
  src: `url("/assets/fonts/Lato-Regular.ttf") format('truetype')`,
  fontWeight: 400
});
globalFontFace(latoFontFamily, {
  src: `url("/assets/fonts/Lato-Bold.ttf") format('truetype')`,
  fontWeight: 700
});
globalFontFace(latoFontFamily, {
  src: `url("/assets/fonts/Lato-Light.ttf") format('truetype')`,
  fontWeight: 300
});
