import { px2rem } from "./utils.css";
import { style } from "@vanilla-extract/css";
import { latoFontFamily } from "./constants";

// Body
const bodyXs = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(12),
  lineHeight: px2rem(14),
  fontWeight: 400
};

const bodyS = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(14),
  lineHeight: px2rem(18),
  fontWeight: 400
};

const bodyM = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(16),
  lineHeight: px2rem(20),
  fontWeight: 400
};

const bodyL = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(24),
  lineHeight: px2rem(28),
  fontWeight: 400
};

// Heading
const subHeading = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(26),
  lineHeight: px2rem(30),
  fontWeight: 400
};
const headingS = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(32),
  lineHeight: px2rem(36),
  letterSpacing: px2rem(-0.32),
  fontWeight: 300
};

const headingM = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(56),
  lineHeight: px2rem(52),
  letterSpacing: px2rem(-0.56),
  fontWeight: 300
};

const headingL = {
  fontFamily: latoFontFamily,
  fontSize: px2rem(72),
  lineHeight: px2rem(68),
  letterSpacing: px2rem(-1.44),
  fontWeight: 300
};

export const typographyStyles = {
  bodyXs: style(bodyXs),
  bodyS: style(bodyS),
  bodyM: style(bodyM),
  bodyL: style(bodyL),
  subHeading: style(subHeading),
  headingS: style(headingS),
  headingM: style(headingM),
  headingL: style(headingL)
};

export const typographyConfig = {
  bodyXs,
  bodyS,
  bodyM,
  bodyL,
  subHeading,
  headingS,
  headingM,
  headingL
};
