const btnConvert = document.getElementById('btnConvert');

btnConvert.addEventListener('click', () =>
{
    let number = Math.abs(document.getElementById('num').value);

    let startMeasure = document.getElementById('startMeasure');
    let valStartMeasure = startMeasure.options[startMeasure.selectedIndex].value;

    let endMeasure = document.getElementById('endMeasure');
    let valEndMeasure = endMeasure.options[endMeasure.selectedIndex].value;
});