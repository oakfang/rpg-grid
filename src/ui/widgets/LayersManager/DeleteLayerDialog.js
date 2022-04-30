import Modal from "react-modal";
import styled from "styled-components";
import { createModalStyles, widget, sizes } from "ui/common";
import { Button } from "ui/atoms/Button";

const modalStyles = createModalStyles();

export function DeleteLayerDialog({ layer, cancel, deleteLayer }) {
  const submit = () => {
    deleteLayer(layer.id);
    cancel();
  };

  return (
    <Modal
      isOpen={!!layer}
      onRequestClose={cancel}
      contentLabel="Delete layer"
      style={modalStyles}
    >
      <Header>
        <h2>Delete layer</h2>
      </Header>
      <Container>
        <Text>Delete layer "{layer?.name}"?</Text>
        <Actions>
          <Button $variant="primary" onClick={cancel}>
            Cancel
          </Button>
          <Button $variant="cta" onClick={submit}>
            Delete
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
}

const Text = styled.p`
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
