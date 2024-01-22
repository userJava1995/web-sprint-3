let purchase_dollar = 448.63;
let purchase_euro = 489.66;

let sale_dollar = 449.19;
let sale_euro = 475.50;

function getResult(){
    let selectValue = currency.value;
    let inputSumma = parseInt(point.value);

    if(selectValue == "KZT"){
        tenge.value = "-";
        dollar.value = (inputSumma / purchase_dollar).toFixed(2);
        euro.value = (inputSumma / purchase_euro).toFixed(2);
    } else if(selectValue == "EUR"){
        tenge.value = (inputSumma * sale_euro).toFixed(2);
        dollar.value = (inputSumma * 1.09).toFixed(2);
        euro.value = "-";
    } else if(selectValue == "USD"){
        tenge.value = (inputSumma * sale_dollar).toFixed(2);
        dollar.value = "-";
        euro.value = (inputSumma * 0.92).toFixed(2);
    }
}