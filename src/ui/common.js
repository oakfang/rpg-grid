import produce from "immer";
import { identity, memoize } from "lodash";
import { css } from "styled-components";

/**
 * @param {'primary'|'neutral'|'cta'} paletteName
 */
export const palette = memoize(
  (paletteName) => css`
    --fill: ${({ theme }) => theme.palette[paletteName].fill};
    --text: ${({ theme }) => theme.palette[paletteName].text};
    --stroke: ${({ theme }) => theme.palette[paletteName].stroke};
  `
);

export const mix = {
  fill: css`
    background-color: var(--fill);
  `,
  text: css`
    color: var(--text);
  `,
  stroke: css`
    border: var(--stroke);
  `,
};

/**
 * @param {'primary'|'neutral'|'cta'} paletteName
 */
export const widget = memoize(
  (paletteName, { useStroke } = {}) => css`
    ${palette(paletteName)}
    ${mix.fill}
  ${mix.text}
  ${useStroke ? mix.stroke : ""}
  `
);

export const sizes = {
  xxs: css`
    ${({ theme }) => theme.size.base * theme.size.scales.xxs}px
  `,
  xs: css`
    ${({ theme }) => theme.size.base * theme.size.scales.xs}px
  `,
  sm: css`
    ${({ theme }) => theme.size.base * theme.size.scales.sm}px
  `,
  md: css`
    ${({ theme }) => theme.size.base * theme.size.scales.md}px
  `,
  lg: css`
    ${({ theme }) => theme.size.base * theme.size.scales.lg}px
  `,
  xl: css`
    ${({ theme }) => theme.size.base * theme.size.scales.xl}px
  `,
  xxl: css`
    ${({ theme }) => theme.size.base * theme.size.scales.xxl}px
  `,
};

const baseModalStyle = {
  overlay: {
    backgroundColor: "var(--overlay)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "static",
    border: "var(--stroke)",
    backgroundColor: "var(--fill)",
    color: "var(--text)",
    padding: 0,
  },
};

export const createModalStyles = (changer = identity) =>
  produce(baseModalStyle, changer);
