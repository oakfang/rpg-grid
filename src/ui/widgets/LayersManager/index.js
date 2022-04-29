import { useSelector } from "react-redux";
import styled from "styled-components";
import { primaryWidget, sizes } from "ui/common";
import { selectCurrentLayer, selectOrderedLayers } from "state/selectors";
import { Layer } from "./Layer";

function useLayers() {
  const layers = useSelector(selectOrderedLayers);
  const activeLayer = useSelector(selectCurrentLayer);

  return {
    layers,
    activeLayer,
  };
}

export function LayersManager() {
  const { layers } = useLayers();

  return (
    <WidgetContainer>
      <h3>Grid Layers</h3>
      {layers.map((layer) => (
        <Layer key={layer.id} layer={layer} />
      ))}
    </WidgetContainer>
  );
}

const WidgetContainer = styled.div`
  ${primaryWidget}
  padding: ${sizes.lg};
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm};
  border-radius: ${sizes.xs};
`;
