function calculaterhombus() {
  const d1 = getInputValueById("rhombus-first-diagonal");

  const d2 = getInputValueById("rhombus-second-diagonal");

  const area = 0.5 * d1 * d2;

  setInnerTextById("rhombus-area", area);

  setFinalView(area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  return element.innerText = area.toFixed(2);
}

function setFinalView(value) {
  const areaView = document.getElementById("area-final-show");
  const p = document.createElement("p");
  p.innerText = `The Total area is : ${value}`;
  areaView.appendChild(p);
}
