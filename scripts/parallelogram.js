function calculateParallelogram(){
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBase.value;
    const base = parseFloat(parallelogramBaseText);

    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightText);

    const area = base * height;

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;

    setFinalView(area);

}