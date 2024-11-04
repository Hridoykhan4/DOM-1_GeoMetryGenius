function calculateEllipse() {
  const major = getInputValueById("ellipse-major");
  const minor = getInputValueById("ellipse-minor");

  const area = parseFloat((Math.PI * major * minor).toFixed(2));

  setInnerTextById("ellipse-area", area);


  setFinalView(area);

/*   const areaView  = document.getElementById('area-final-show');
  const p = document.createElement('p');
  p.innerText = `The Total area is : ${area}`;
  areaView.appendChild(p); */
}
