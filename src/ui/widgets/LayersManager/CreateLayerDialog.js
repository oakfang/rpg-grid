import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { createModalStyles, widget, sizes } from "ui/common";
import { Button } from "ui/atoms/Button";
import { SelfClosingInput } from "ui/atoms/SelfClosingInput";

const INITIAL_LAYER_NAME = "New Layer name";

const modalStyles = createModalStyles((styles) => {
  styles.content.width = "350px";
});

export function CreateLayerDialog({ show, close, addLayer }) {
  const [name, setName] = useState(INITIAL_LAYER_NAME);
  useEffect(() => {
    if (!show) {
      setName(INITIAL_LAYER_NAME);
    }
  }, [show]);
  const submit = () => {
    if (!name) return;
    addLayer(name);
    close();
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={close}
      contentLabel="Create new layer"
      style={modalStyles}
    >
      <Header>
        <h2>Create new Layer</h2>
      </Header>
      <Container>
        <Input value={name} setValue={setName} submit={submit} />
        <Actions>
          <Button $variant="primary" onClick={close}>
            Cancel
          </Button>
          <Button $variant="cta" onClick={submit} disabled={!name}>
            Create
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
}

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
