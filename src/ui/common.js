import { css } from "styled-components";

export const primaryWidget = css`
  background-color: ${({ theme }) => theme.palette.primary.fill};
  color: ${({ theme }) => theme.palette.primary.text};
`;

export const neutralWidget = css`
  background-color: ${({ theme }) => theme.palette.neutral.fill};
  color: ${({ theme }) => theme.palette.neutral.text};
`;

export const ctaWidget = css`
  background-color: ${({ theme }) => theme.palette.cta.fill};
  color: ${({ theme }) => theme.palette.cta.text};
`;

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