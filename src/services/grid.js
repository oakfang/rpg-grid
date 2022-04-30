import { useDispatch, useSelector } from "react-redux";
import * as actions from "state/actions";
import { selectGrid } from "state/selectors/grid";

export function useGridService() {
  const dispatch = useDispatch();
  const grid = useSelector(selectGrid);

  const createGrid = (payload) => {
    dispatch(actions.createGrid(payload));
  };

  return { grid, createGrid };
}
