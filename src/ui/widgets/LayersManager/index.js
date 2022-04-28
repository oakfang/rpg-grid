import { useState, useMemo } from "react";
import styled from "styled-components";
import { primaryWidget, sizes, ctaWidget } from "ui/common";

const getUniqueId = () => crypto.randomUUID();

function createLayerObject(name) {
  return {
    id: getUniqueId(),
    name,
  };
}

function useLayers() {
  const [layers, setLayers] = useState(() => {
    const layer = createLayerObject("Layer 1");
    return {
      [layer.id]: layer,
    };
  });
  const [layersOrder, setLayerOrder] = useState(() => Object.keys(layers));
  const [activeLayer, setActiveLayer] = useState(() => layersOrder[0]);

  const orderedLayers = useMemo(() => {
    return layersOrder.map((id) => layers[id]);
  }, [layersOrder, layers]);

  return {
    layers: orderedLayers,
    activeLayer,
  };
}

export function LayersManager() {
  const { layers } = useLayers();

  return (
    <WidgetContainer>
      <h3>Grid Layers</h3>
      {layers.map((layer) => (
        <LayerDetails key={layer.id}>
          <summary>
            {layer.name} <span>{String.fromCodePoint(0x270f)}</span>
          </summary>
          <AssetsContainer>No assets yet!</AssetsContainer>
        </LayerDetails>
      ))}
    </WidgetContainer>
  );
}

const AssetsContainer = styled.div`
  ${primaryWidget}
  border-radius: ${sizes.xs};
  padding: ${sizes.sm};
  margin-block: ${sizes.sm};
`;

const LayerDetails = styled.details`
  ${ctaWidget}
  border-radius: ${sizes.xs};
  padding: ${sizes.md};

  summary {
    cursor: pointer;
    user-select: none;
  }
`;

const WidgetContainer = styled.div`
  ${primaryWidget}
  padding: ${sizes.lg};
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm};
  border-radius: ${sizes.xs};
`;
