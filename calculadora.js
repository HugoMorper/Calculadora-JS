
let screenP = document.getElementById("screen");
let screenContainer = document.getElementById("screenContainer");

let initialFontSize = "60px";
let reducedFontSize = "40px";
let lastOperator;
let valueLength;
let isResult = false;
let numberLength = 0;
let expressionLength = 0;
let expressionMaxLength = 30;
let numberMaxLength = 8;

screenP.innerHTML = "";

function variableValidation()
{
     if (screenP.innerHTML != "")
     {
         return true;
     }
}

function lengthValidation()
{
    if(screenP.innerHTML.length > 12)
    {
        screenP.style.fontSize = reducedFontSize;
    }else{
        screenP.style.fontSize = initialFontSize;
    }
    if(screenP.innerHTML.length < expressionMaxLength){
        return true;
    }
    
}


function getOperator(value){

    if(variableValidation() && lengthValidation()){
        if(isNaN(screenP.innerHTML.slice(-1)))
        {
            eraseValue();  
        }
        screenP.innerHTML += value;
        isResult = false;
        numberLength = 0;

    }
}

function getValue(value){
    if(lengthValidation()){
        if(!isResult){
            //if(numberLength <= numberMaxLength){
                screenP.innerHTML += value;
            //}
            numberLength++;
        }else{
            screenP.innerHTML = value;
        }
        isResult = false;
    }
    console.log(screenP.innerHTML);
    console.log(screenP.innerHTML.length);
}

function reset(){
    screenP.innerHTML = ""
}

function eraseValue(){
    screenP.innerHTML = screenP.innerHTML.slice(0,-1);
    lengthValidation();
}

function equal(){
    if(!variableValidation())
    {
        screenP.innerHTML = 0;
    }
    else{
        screenP.innerHTML = eval(screenP.innerHTML);
    }
    isResult = true;
}

