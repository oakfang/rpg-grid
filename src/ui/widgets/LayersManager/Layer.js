import { useState, useEffect, useCallback } from "react";
import { useLayer } from "services/layers";
import styled from "styled-components";
import { IconButton } from "ui/atoms/Button";
import { SelfClosingInput } from "ui/atoms/SelfClosingInput";
import { PENCIL, CLOSE, TRASH } from "ui/atoms/icons";
import { widget, sizes } from "ui/common";

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
        <LayerName>
          <LayerNameController
            name={name}
            setName={setName}
            isEditing={isEditing}
            submit={submit}
            close={close}
          />
          <LayerActions>
            <IconButton
              title="Edit layer name"
              $icon={isEditing ? CLOSE : PENCIL}
              $rotation={isEditing ? 0 : 45}
              $variant="cta"
              $size="md"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(!isEditing);
              }}
            />
            <IconButton
              title="Delete layer"
              $icon={TRASH}
              $variant="cta"
              $size="md"
              disabled={!onDeleteLayer}
              onClick={(e) => {
                e.stopPropagation();
                onDeleteLayer(layer);
              }}
            />
          </LayerActions>
        </LayerName>
      </summary>
      <AssetsContainer>No assets yet!</AssetsContainer>
    </LayerDetails>
  );
}

function LayerNameController({ name, setName, isEditing, submit, close }) {
  if (!isEditing) {
    return <span>{name}</span>;
  }

  return (
    <SelfClosingInput
      value={name}
      setValue={setName}
      close={close}
      submit={submit}
    />
  );
}

const LayerActions = styled.div`
  display: flex;
  gap: ${sizes.sm};
`;

const LayerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

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
