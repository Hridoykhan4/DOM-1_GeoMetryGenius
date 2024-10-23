function calculateRectangleArea(){
    // Get the rectangle width
    const recTangleWidth = document.getElementById('rectangle-width');
    const recTangleWidthText = recTangleWidth.value;
    const width = parseFloat(recTangleWidthText);
    
    // Get the Rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText)

    // Calculate rectangle area
    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

}