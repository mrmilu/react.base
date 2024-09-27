import { latoFontFamily } from "@/src/shared/presentation/styles/constants";
import { globalFontFace } from "@vanilla-extract/css";

globalFontFace(latoFontFamily, {
  src: `url("/src/shared/presentation/assets/fonts/Lato-Regular.ttf") format('truetype')`,
  fontWeight: 400
});
globalFontFace(latoFontFamily, {
  src: `url("/src/shared/presentation/assets/fonts/Lato-Bold.ttf") format('truetype')`,
  fontWeight: 700
});
globalFontFace(latoFontFamily, {
  src: `url("/src/shared/presentation/assets/fonts/Lato-Light.ttf") format('truetype')`,
  fontWeight: 300
});
