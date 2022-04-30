import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useGridService } from "services/grid";
import { createModalStyles, widget, sizes } from "ui/common";
import { Button } from "ui/atoms/Button";
import { Slider } from "ui/atoms/Slider";

const modalStyles = createModalStyles((styles) => {
  styles.content.width = "400px";
});

export function CreateGridDialog({ show, close }) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={close}
      contentLabel="Create new grid"
      style={modalStyles}
    >
      <InnerDialog close={close} />
    </Modal>
  );
}

function InnerDialog({ close }) {
  const { grid, createGrid } = useGridService();
  const [height, setHeight] = useState(grid.height);
  const [width, setWidth] = useState(grid.width);
  const [columnCount, setColumnCount] = useState(grid.columnCount);

  const submit = () => {
    createGrid({ height, width, columnCount });
    close();
  };

  return (
    <>
      <Header>
        <h2>Create new grid</h2>
      </Header>
      <Container>
        <Controls>
          <Field>
            <span>Height ({height}):</span>
            <Slider
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="200"
              max="1000"
              step={50}
            />
          </Field>
          <Field>
            <span>Width ({width}):</span>
            <Slider
              value={width}
              onChange={(e) => console.log(e) ?? setWidth(e.target.value)}
              min="200"
              max="1000"
              step={50}
            />
          </Field>
          <Field>
            <span>Columns ({columnCount}):</span>
            <Slider
              value={columnCount}
              onChange={(e) => setColumnCount(e.target.value)}
              min="5"
              max="100"
              step={5}
            />
          </Field>
        </Controls>
        <Actions>
          <Button $variant="primary" onClick={close}>
            Cancel
          </Button>
          <Button $variant="cta" onClick={submit}>
            Create
          </Button>
        </Actions>
      </Container>
    </>
  );
}

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.md};
  margin-bottom: ${sizes.md};
`;

const Field = styled.label`
  display: flex;
  gap: ${sizes.md};
  align-items: center;

  input {
    flex: 1;
  }
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
