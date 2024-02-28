
const lengthTypes=
{ //a record of every length type with values that they are relative to each other
    Nm:1, //the smallest unit in the calculator, thus everything else is a COUNT of Nm
    mm:1000, //one micrometre is 1000 nanometres
    Mm:1e6, //one millimetre is 1 million nanometres
    Cm:1e7, //one cm is 10 million nanometres
    In:2.54e7, //one inch is 25.4 million nanometres
    f:3.048e8, //one foot is 304.8 million nanometres
    Y:9.144e8, //one yard is 914.4 million nanometres
    m:1e9, //one metre is 1 billion nanometers
    Km:1e12, //one kilometre is 1 trillion nanometres
    Mi:1.609e12, //one mile is 1.609 trillion nanometres
    NM:1.852e12, //one nautical mile is trillion nanometres
};


//1 for the bar on the left, 2 for the bar on the right
const inputStartValue = document.getElementById("num");
const inputStartType = document.getElementById("startMeasure");
const inputEndValue = document.getElementById("result");
const inputEndType = document.getElementById("endMeasure");

function handleChange(e)
{
    let type1=inputStartType.value, type2=inputEndType.value
    if([inputStartValue,inputStartType,inputEndType].includes(e.target||e.path[0])){
        //left-hand side changed by human(so set right side)
        const n= Math.abs(parseFloat(inputStartValue.value));
        if(isNaN(n)){return null}
        inputEndValue.value=n*(lengthTypes[type1]/lengthTypes[type2]);
    }
    else{
        //right-hand side changed by human(so set left side)
        const n= Math.abs(parseFloat(inputEndValue.value));
        if(isNaN(n)){return null}
        inputStartValue.value=n*(lengthTypes[type2]/lengthTypes[type1]);
    }
}

inputStartValue.addEventListener('change',handleChange);
inputEndValue.addEventListener('change',handleChange);
inputStartType.addEventListener('change',handleChange);
inputEndType.addEventListener('change',handleChange);