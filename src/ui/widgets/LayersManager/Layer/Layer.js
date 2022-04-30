import { useState, useEffect, useCallback } from "react";
import { useLayer } from "services/layers";
import styled from "styled-components";
import { widget, sizes } from "ui/common";
import { LayerSummary } from "./LayerSummary";
import { LayerAssets } from "./LayerAssets";

export function Layer({ layer, onDeleteLayer }) {
  const { isActive, setLayerName, selectLayer } = useLayer(layer.id);
  const [name, setName] = useState(layer.name);
  const [isEditing, setIsEditing] = useState(false);
  const close = useCallback(() => setIsEditing(false), []);

  useEffect(() => {
    if (!isEditing) {
      setName(layer.name);
    }
  }, [isEditing, layer]);
  const submit = () => {
    if (name) {
      setLayerName(name);
    }
    close();
  };

  return (
    <LayerDetails $active={isActive}>
      <summary onClick={selectLayer} onKeyUp={(e) => e.preventDefault()}>
        <LayerSummary
          {...{
            layer,
            name,
            setName,
            isEditing,
            setIsEditing,
            submit,
            close,
            onDeleteLayer,
          }}
        />
      </summary>
      <AssetsContainer>
        <LayerAssets layer={layer} />
      </AssetsContainer>
    </LayerDetails>
  );
}

const AssetsContainer = styled.div`
  ${widget("primary")}
  border-radius: ${sizes.xs};
  padding: ${sizes.sm};
  margin-block: ${sizes.sm};
`;

const LayerDetails = styled.details`
  ${widget("cta")}
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  border-radius: ${sizes.xs};
  padding: ${sizes.md};

  > summary {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: ${sizes.sm};

    &:before {
      content: "▶";
    }
  }

  &[open] > summary::before {
    content: "▼";
  }
`;
