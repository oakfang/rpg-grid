import styled from "styled-components";
import { mix, sizes, widget } from "ui/common";

export const Button = styled.button`
  ${(props) => widget(props.$variant)};
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

export const IconButton = styled(Button)`
  ${mix.stroke};
  border-radius: 50%;
  padding: 0;
  font-size: calc(2 * ${(props) => sizes[props.$size]});
  --size: calc(3 * ${(props) =>  sizes[props.$size]});
  min-height: var(--size);
  max-height: var(--size);
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${(props) => props.$rotation || 0}deg);

  &:active {
    transform: rotate(${(props) => props.$rotation || 0}deg) scale(0.9);
  }

  &::after {
    content: "${(props) => String.fromCodePoint(props.$icon)}";
    line-height: 1em;
  }
`;
