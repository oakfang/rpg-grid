import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLayerName } from "state/actions";
import styled from "styled-components";
import { IconButton } from "ui/atoms/Button";
import { PENCIL } from "ui/atoms/icons";
import { primaryWidget, sizes, ctaWidget } from "ui/common";

export function Layer({ layer }) {
  const [name, setName] = useState(layer.name);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isEditing) {
      setName(layer.name);
    }
  }, [isEditing, layer]);
  const submit = () => {
    dispatch(setLayerName({ name, id: layer.id }));
    setIsEditing(false);
  };

  return (
    <LayerDetails>
      <summary>
        <LayerName>
          <LayerNameController
            name={name}
            setName={setName}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            submit={submit}
          />
          <IconButton
            $icon={PENCIL}
            $rotation={45}
            $variant="cta"
            $size="xs"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          />
        </LayerName>
      </summary>
      <AssetsContainer>No assets yet!</AssetsContainer>
    </LayerDetails>
  );
}

function LayerNameController({
  name,
  setName,
  isEditing,
  setIsEditing,
  submit,
}) {
  const close = useCallback(() => setIsEditing(false), [setIsEditing]);

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

function SelfClosingInput({ value, setValue, close, submit }) {
  const inputRef = useRef(null);
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        close();
      }
    };

    const input = inputRef.current;
    input.focus();
    input.select();
    input?.addEventListener("keydown", onKeyDown);
    return () => {
      input?.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  const onSubmit = (e) => {
    e.preventDefault();
    submit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onBlur={close}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

const LayerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

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
