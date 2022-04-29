import { useState } from "react";
import styled from "styled-components";
import { sizes, widget } from "ui/common";
import { useLayersService } from "services/layers";
import { IconButton } from "ui/atoms/Button";
import { ADD } from "ui/atoms/icons";
import { CreateLayerDialog } from "./CreateLayerDialog";
import { DeleteLayerDialog } from "./DeleteLayerDialog";
import { Layer } from "./Layer";

export function LayersManager() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [toBeDeletedLayer, setToBeDeletedLayer] = useState(null);
  const { layers, addLayer, deleteLayer } = useLayersService();

  return (
    <WidgetContainer>
      <CreateLayerDialog
        addLayer={addLayer}
        show={showCreateModal}
        close={() => setShowCreateModal(false)}
      />
      <DeleteLayerDialog
        deleteLayer={deleteLayer}
        layer={toBeDeletedLayer}
        cancel={() => setToBeDeletedLayer(null)}
      />
      <Toolbar>
        <h3>Grid Layers</h3>
        <IconButton
          onClick={() => setShowCreateModal(true)}
          title="Add new layer"
          $icon={ADD}
          $variant="cta"
          $size="lg"
        />
      </Toolbar>
      {layers.map((layer) => (
        <Layer
          key={layer.id}
          layer={layer}
          onDeleteLayer={deleteLayer && setToBeDeletedLayer}
        />
      ))}
    </WidgetContainer>
  );
}

const Toolbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WidgetContainer = styled.div`
  ${widget("primary")}
  padding: ${sizes.lg};
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm};
  border-radius: ${sizes.xs};
`;
