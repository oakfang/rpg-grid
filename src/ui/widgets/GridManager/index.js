import { useLayersService } from "services/layers";
import styled, { css } from "styled-components";
import { mix, widget } from "ui/common";
import { useGridService } from "services/grid";
import { gridHelperEnabled } from "./guidelines";

export function GridManager() {
  const {
    grid: { height, width, columnCount },
  } = useGridService();
  const { layers } = useLayersService();

  return (
    <GridContainer $height={height} $width={width} $columnCount={columnCount}>
      {layers.map((layer, idx) => (
        <GridMap key={layer.id} $index={idx}>
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
  --dot-spacing: ${(props) => props.$width / props.$columnCount - 2}px;
  --dot-color: var(--text);
`;

const GridContainer = styled.div`
  ${widget("neutral")};
  ${mix.stroke}
  position: relative;
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px;
  min-height: ${(props) => props.$height}px;
  min-width: ${(props) => props.$width}px;
  --column-count: ${(props) => props.$columnCount};
  --column-width: ${(props) => props.$width / props.$columnCount}px;
  ${gridHelperEnabled && gridGuidelines}
`;
