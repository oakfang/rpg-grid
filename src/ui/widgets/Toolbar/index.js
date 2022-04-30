import { useModalService } from "services/modal";
import { Button } from "ui/atoms/Button";
import * as createGridDialog from "./CreateGridDialog";

export function Toolbar() {
  const { open } = useModalService();

  return (
    <>
      <h1>RPG Grid</h1>
      <Button
        $variant="cta"
        onClick={() =>
          open({
            label: createGridDialog.label,
            content: <createGridDialog.CreateGridDialog />,
            styleProducer: createGridDialog.styles,
          })
        }
      >
        New Grid
      </Button>
    </>
  );
}
