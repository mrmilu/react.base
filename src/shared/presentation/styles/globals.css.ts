import { typographyConfig } from "@/src/shared/presentation/styles/typography.css";
import { px2rem } from "@/src/shared/presentation/styles/utils.css";
import { globalStyle } from "@vanilla-extract/css";
import { vars } from "@/src/shared/presentation/styles/theme.css";
import { latoFontFamily } from "@/src/shared/presentation/styles/constants";

globalStyle("body", {
  backgroundColor: vars.colors.gray10
});

globalStyle("*", {
  fontFamily: latoFontFamily
});

globalStyle("* > :focus", {
  outline: `${px2rem(2)} solid ${vars.colors.gray40}`
});

globalStyle("h1", typographyConfig.headingL);
globalStyle("h2", typographyConfig.headingM);
globalStyle("h3", typographyConfig.headingS);
globalStyle("h4", typographyConfig.subHeading);
globalStyle("p", typographyConfig.bodyM);
globalStyle("small", typographyConfig.bodyXs);
