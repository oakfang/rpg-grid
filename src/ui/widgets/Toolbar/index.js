import { useState } from "react";
import { Button } from "ui/atoms/Button";
import { CreateGridDialog } from "./CreateGridDialog";

export function Toolbar() {
  const [creatingGrid, setCreatingGrid] = useState(false);
  const close = () => setCreatingGrid(false);

  return (
    <>
      <h1>RPG Grid</h1>
      <Button $variant="cta" onClick={() => setCreatingGrid(true)}>
        New Grid
      </Button>
      <CreateGridDialog show={creatingGrid} close={close} />
    </>
  );
}
