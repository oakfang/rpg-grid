import { useLayersService } from "services/layers";
import styled from "styled-components";
import { mix, widget } from "ui/common";
import { useGridService } from "services/grid";
import { gridGuideLines } from "./guidelines";
import { GridLayer } from "./GridLayer";

export function GridManager() {
  const {
    grid: { height, width, columnCount },
  } = useGridService();
  const { layers } = useLayersService();

  return (
    <GridContainer $height={height} $width={width} $columnCount={columnCount}>
      {layers.map((layer, idx) => (
        <GridLayer key={layer.id} index={idx} layer={layer} />
      ))}
      {gridGuideLines && (
        <GridLayer idx={layers.length} layer={gridGuideLines} />
      )}
    </GridContainer>
  );
}

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
  --dot-size: 2px;
  --dot-spacing: ${(props) => props.$width / props.$columnCount - 2}px;
  --dot-color: var(--text);
`;
