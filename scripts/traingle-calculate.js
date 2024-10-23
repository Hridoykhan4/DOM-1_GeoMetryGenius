/*
*   Objective = get base, height of a triangle.calculate the area by using the provided formula and then display the result

    Step 1 : Get base value of the triangle
    step 2: Added an id in the base input field
    Step 3: use getelement byId to access the input fiels
    Step-4: Get value from the input field by using triangle-base.value
    STe 5: Convert the value to a number using parseFloat
 */

function calculateTriangleArea(){
    // Get Triangle Base Value
    const triangleBase = document.getElementById('triangle-base');
    const TriangleBaseText= triangleBase.value;
    const base = parseFloat(TriangleBaseText);

    const TriangleHeight = document.getElementById('triangle-height');
    const TriangleHeightText = TriangleHeight.value;
    const height = parseFloat(TriangleHeightText);


    const area = 0.5 * base * height;

    // Calculate Triangle Area
    const TraingleAreaSpan = document.getElementById('triangle-area');
    TraingleAreaSpan.innerText = area;

}