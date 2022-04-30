export let gridGuideLines = null;

if (window?.CSS?.paintWorklet?.addModule) {
  CSS.paintWorklet.addModule(
    "https://unpkg.com/houdini-paint-dot-grid/dist/dot-grid-worklet.js"
  );
  gridGuideLines = {
    id: "grid-guidelines",
    name: "Grid Guidelines",
    assets: [],
    background: "paint(dot-grid)",
  };
}
