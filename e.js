function calculateE() {
  const area =
    Math.PI * getInputValueById("e-major") * getInputValueById("e-minor");
  setInnerTextById("e-area", area);
  setFinalView(area.toFixed(2));
}
