import { useState } from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { useModalService } from "services/modal";
import { widget, sizes, toRGBAString } from "ui/common";
import { Button } from "ui/atoms/Button";
import { SelfClosingInput } from "ui/atoms/SelfClosingInput";

export const label = "Create new layer";

export const styles = (styles) => {
  styles.content.width = "350px";
};

export function CreateLayerDialog({ addLayer }) {
  const [showColor, setShowColor] = useState(false);
  const { close } = useModalService();
  const [background, setBackground] = useState({
    rgb: { r: 255, g: 255, b: 255, a: 1 },
  });
  const [name, setName] = useState("New Layer name");

  const submit = () => {
    if (!name) return;
    addLayer({ name, background: toRGBAString(background.rgb) });
    close();
  };

  return (
    <>
      <Header>
        <h2>Create new Layer</h2>
      </Header>
      <Container>
        <Row>
          <ColorIndicator
            $background={background}
            onClick={() => setShowColor(!showColor)}
          />
          <Input value={name} setValue={setName} submit={submit} />
        </Row>
        {showColor && (
          <SketchPicker
            color={background}
            onChange={(color) => setBackground(color)}
          />
        )}
        <Actions>
          <Button $variant="primary" onClick={close}>
            Cancel
          </Button>
          <Button $variant="cta" onClick={submit} disabled={!name}>
            Create
          </Button>
        </Actions>
      </Container>
    </>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${sizes.md};
`;

const ColorIndicator = styled.div`
  cursor: pointer;
  width: ${sizes.xxl};
  height: ${sizes.xxl};
  border-radius: 50%;
  background-color: ${({ $background: { rgb } }) => toRGBAString(rgb)};
`;

const Input = styled(SelfClosingInput)`
  margin-block: ${sizes.xl};
  font-size: ${sizes.xxl};
`;

const Header = styled.header`
  ${widget("primary")}
  padding: ${sizes.lg};
`;

const Container = styled.div`
  padding: ${sizes.lg};
`;

const Actions = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: ${sizes.md};
`;
