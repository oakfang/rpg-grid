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
    box-shadow: inset 0 0 1px 1px var(--stroke);
  `,
};

/**
 * @param {'primary'|'neutral'|'cta'} paletteName
 */
export const widget = memoize(
  (paletteName) => css`
    ${palette(paletteName)}
    ${mix.fill}
    ${mix.text}
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
    zIndex: 1000,
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

export const scroller = css`
  &::-webkit-scrollbar {
    width: ${sizes.md};
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    ${widget("cta")}
    border-radius: ${sizes.xs};
  }
`;
