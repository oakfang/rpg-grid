import styled from "styled-components";
import { widget, sizes } from "ui/common";
import { Button } from "ui/atoms/Button";
import { useModalService } from "services/modal";

export const label = "Delete layer";

export function DeleteLayerDialog({ layer, deleteLayer }) {
  const { close } = useModalService();
  const submit = () => {
    deleteLayer(layer.id);
    close();
  };

  return (
    <>
      <Header>
        <h2>Delete layer</h2>
      </Header>
      <Container>
        <Text>Delete layer "{layer?.name}"?</Text>
        <Actions>
          <Button $variant="primary" onClick={close}>
            Cancel
          </Button>
          <Button $variant="cta" onClick={submit}>
            Delete
          </Button>
        </Actions>
      </Container>
    </>
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
