const btnSum = document.getElementById("btnSum")! as HTMLButtonElement;
const txtNum1 = document.getElementById("txtNum1")! as HTMLInputElement;
const txtNum2 = document.getElementById("txtNum2")! as HTMLInputElement;

function sumar(num1, num2) {
    return num1 + num2;    
}

btnSum.addEventListener("click", function() {
    // console.log(sumar(+txtNum1.value, +txtNum2.value));
    console.log(sumar(parseInt(txtNum1.value), parseInt(txtNum2.value)));
    // console.log(sumar(Number(txtNum1.value), Number(txtNum2.value)))
});