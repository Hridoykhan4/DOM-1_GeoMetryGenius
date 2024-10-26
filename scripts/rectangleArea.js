function calculateRectangleArea() {
  const recTangleWidth = getInputValueById("rectangle-width");
  const rectangleLength = getInputValueById("rectangle-length");

  const area = recTangleWidth * rectangleLength;

  setInnerTextById("rectangle-area", area);
}
