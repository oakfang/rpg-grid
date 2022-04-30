import styled from "styled-components";
import { IconButton } from "ui/atoms/Button";
import { SelfClosingInput } from "ui/atoms/SelfClosingInput";
import { PENCIL, CLOSE, TRASH } from "ui/atoms/icons";
import { sizes } from "ui/common";

export function LayerSummary({
  layer,
  name,
  setName,
  isEditing,
  setIsEditing,
  submit,
  close,
  onDeleteLayer,
}) {
  return (
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
