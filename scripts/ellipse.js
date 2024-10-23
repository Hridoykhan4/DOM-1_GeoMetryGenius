function calculateEllipse(){
    const major = getInputValueById('ellipse-major');
    const minor = getInputValueById('ellipse-minor');
    
    const area = (Math.PI * major * minor).toFixed(2);

    setInnerTextById('ellipse-area', area)

}
