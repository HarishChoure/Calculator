
let showError = true

//get form element by querySelector
const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
event.preventDefault();

//Get input value
const formData = new FormData(form);
var num1 = formData.get("num1");
var num2 = formData.get("num2");
const operator = formData.get("operator")
console.log(num2)
//Check operator is initalize or not
if(operator =='Choose operator'){
    alert('Please Choose operator')
    showError = false
}

//change string into number
num1 = parseFloat(num1)
num2 = parseFloat(num2)

var ans = 0
//By using operator calling their specific function

if(operator=='+')
{
    ans = sum(num1,num2)
}
else if(operator=='-'){
    ans = sub(num1,num2)
}
else if(operator=='*'){
    ans = multiply(num1,num2)
}
else if(operator=='/'){
    ans = divide(num1,num2)
}

//Display Message
if(showError){
     const message = document.createElement("p");
     message.textContent = `${num1} ${operator} ${num2} = ${ans}`;
     document.body.appendChild(message);
}        
});

//function

function sum(a,b){
    showError = true
    return a+b
}
function sub(a,b){
    showError = true
    return a-b
}
function multiply(a,b){
    showError = true
    return a*b
}
function divide(a, b) {
    //Handling zero division error
    try {
        if (b === 0) {
        throw new Error('Please don\'t enter "0" in second input field ');
    }
    showError = true
    return a / b;
    } 
    catch (error) {
        showError=false
        alert(error.message)
    }
}