import styled from "styled-components";
import { primaryWidget, neutralWidget, ctaWidget, sizes } from "ui/common";

const variants = {
  primary: primaryWidget,
  neutral: neutralWidget,
  cta: ctaWidget,
};

export const Button = styled.button`
  ${(props) => variants[props.$variant]};
  padding: ${(props) => sizes[props.$size]};
  border: none;
  cursor: pointer;
  transition: transform 50ms linear;
  border-radius: ${sizes.xs};

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

Button.defaultProps = {
  $variant: "primary",
  $size: "md",
};
