import styled from "styled-components";
import { widget, sizes, mix } from "ui/common";

const hexToRGBA = (hex, alpha) =>
  `rgba(${hex.match(/(\w\w)/g).map((b) => parseInt(b, 16))},${alpha})`;

export const Slider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    height: ${sizes.md};
    cursor: pointer;
    background: ${({ min, max, value, theme, $variant }) => `
    linear-gradient(to right, ${theme.palette[$variant].fill} 0%, ${
      theme.palette[$variant].fill
    } ${((+value - +min) / (+max - +min)) * 100}%, ${hexToRGBA(
      theme.palette[$variant].fill,
      0.6
    )} ${((value - min) / (max - min)) * 100}%, ${hexToRGBA(
      theme.palette[$variant].fill,
      0.3
    )} 100%)`};
    border-radius: ${sizes.xxs};
  }

  &::-webkit-slider-thumb {
    ${({ $variant }) => widget($variant)};
    ${mix.stroke};
    height: ${sizes.xl};
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    transform: translateY(-25%);
    cursor: pointer;
    -webkit-appearance: none;
  }

  &:active::-webkit-slider-runnable-track {
    ${mix.stroke};
  }
`;

Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  $variant: "cta",
};
