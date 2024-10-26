function calculatePentagon() {
  const perimeter = getInputValueById("pentagon-perimeter");
  console.log(perimeter);

  const base = getInputValueById("pentagon-base");
  console.log(base);

  const area = 0.5 * perimeter * base;

  setInnerTextById("pentagon-area", area);
}
