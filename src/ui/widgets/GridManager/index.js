import { useLayersService } from "services/layers";
import styled, { css } from "styled-components";
import { mix } from "ui/common";
import { gridHelperEnabled } from "./guidelines";

function useGridService() {
  return {
    height: 500,
    width: 500,
    coulmnCount: 10,
  };
}

export function GridManager() {
  const { height, width, coulmnCount } = useGridService();
  const { layers } = useLayersService();

  return (
    <GridContainer $height={height} $width={width} $coulmnCount={coulmnCount}>
      {layers.map((layer, idx) => (
        <GridMap $index={idx}>
          <Asset $x={4} $y={5} $width={2} $height={1} $bg="red" />
        </GridMap>
      ))}
    </GridContainer>
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
  z-index: ${(props) => props.$index};
`;

const gridGuidelines = css`
  background-image: paint(dot-grid);
  --dot-size: 2px;
  --dot-spacing: ${(props) => props.$width / props.$coulmnCount - 2}px;
  --dot-color: white;
`;

const GridContainer = styled.div`
  ${mix.stroke}
  position: relative;
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px;
  --column-count: ${(props) => props.$coulmnCount};
  --column-width: ${(props) => props.$width / props.$coulmnCount}px;
  ${gridHelperEnabled && gridGuidelines}
`;
