export let gridHelperEnabled = false;

if (window?.CSS?.paintWorklet?.addModule) {
  CSS.paintWorklet.addModule(
    "https://unpkg.com/houdini-paint-dot-grid/dist/dot-grid-worklet.js"
  );
  gridHelperEnabled = true;
}
