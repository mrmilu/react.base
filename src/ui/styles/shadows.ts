import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";

export type shadowsType = "one";

export const shadows: Record<shadowsType, FlattenSimpleInterpolation> = {
  one: css`0 ${px2rem(4)} ${px2rem(16)} 0 rgb(0 0 0 / 20%);`
};
