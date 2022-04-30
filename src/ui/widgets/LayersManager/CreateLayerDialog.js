import { useState } from "react";
import styled from "styled-components";
import { useModalService } from "services/modal";
import { widget, sizes } from "ui/common";
import { Button } from "ui/atoms/Button";
import { SelfClosingInput } from "ui/atoms/SelfClosingInput";

export const label = "Create new layer";

export const styles = (styles) => {
  styles.content.width = "350px";
};

export function CreateLayerDialog({ addLayer }) {
  const { close } = useModalService();
  const [name, setName] = useState("New Layer name");

  const submit = () => {
    if (!name) return;
    addLayer(name);
    close();
  };

  return (
    <>
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
    </>
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
