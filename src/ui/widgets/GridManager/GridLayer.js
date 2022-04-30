import styled from "styled-components";

export function GridLayer({ layer, index, className }) {
  return (
    <GridMap
      className={className}
      $index={index}
      $background={layer.background}
    >
      <Asset $x={4} $y={5} $width={2} $height={1} $bg="red" />
    </GridMap>
  );
}

const Asset = styled.div`
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  grid-column-start: ${(props) => props.$x};
  grid-column-end: span ${(props) => props.$width};
  grid-row-start: ${(props) => props.$y};
  grid-row-end: span ${(props) => props.$height};
  background: ${(props) => props.$bg};
`;

Asset.defaultProps = {
  $x: 1,
  $y: 1,
  $width: 1,
  $height: 1,
  $bg: "transparent",
};

const GridMap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
  grid-template-rows: repeat(auto-fill, var(--column-width));
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background: ${(props) => props.$background};
  z-index: ${(props) => props.$index};
`;
