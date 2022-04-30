import styled from "styled-components";
import { sizes, widget } from "ui/common";
import { useLayersService } from "services/layers";
import { useModalService } from "services/modal";
import { IconButton } from "ui/atoms/Button";
import { ADD } from "ui/atoms/icons";
import * as createLayerDialog from "./CreateLayerDialog";
import * as deleteLayerDialog from "./DeleteLayerDialog";
import { Layer } from "./Layer";

export function LayersManager() {
  const { layers, addLayer, deleteLayer } = useLayersService();
  const { open } = useModalService();

  const setToBeDeletedLayer = (layer) => {
    open({
      label: deleteLayerDialog.label,
      content: (
        <deleteLayerDialog.DeleteLayerDialog
          deleteLayer={deleteLayer}
          layer={layer}
        />
      ),
    });
  };

  return (
    <WidgetContainer>
      <Toolbar>
        <h3>Grid Layers</h3>
        <IconButton
          onClick={() =>
            open({
              label: createLayerDialog.label,
              content: (
                <createLayerDialog.CreateLayerDialog addLayer={addLayer} />
              ),
              styleProducer: createLayerDialog.styles,
            })
          }
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
