import { useSelector, useDispatch } from "react-redux";
import { selectOrderedLayers, selectCurrentLayer } from "state/selectors";
import * as actions from "state/actions";

export function useLayersService() {
  const dispatch = useDispatch();
  const layers = useSelector(selectOrderedLayers);

  const addLayer = (name) => dispatch(actions.addLayer(name));
  const deleteLayer =
    layers.length > 1 ? (id) => dispatch(actions.deleteLayer(id)) : null;

  return { layers, addLayer, deleteLayer };
}

export function useLayer(layerId) {
  const dispatch = useDispatch();
  const currentLayer = useSelector(selectCurrentLayer);

  const isActive = !currentLayer || currentLayer?.id === layerId;
  const setLayerName = (name) =>
    dispatch(actions.setLayerName({ name, id: layerId }));
  const selectLayer = () => dispatch(actions.selectLayer(layerId));

  return {
    isActive,
    setLayerName,
    selectLayer,
  };
}
