//get the values form the interface
//Starts or Controller function
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //we need to validate out input at the beginning ! always
    //parse into integers    
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //we call generateNumbers
        numbers = generateNumbers(startValue, endValue); 
        //we call displayNumbers
    displayNumbers(numbers);  
    }else {
        alert("You must enter integers!");
    } 

}
//generate numbers from the startValue to the endValue
//Loginc function(s)
function generateNumbers(startValue, endValue){

    let numbers = [];

    //We want to get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        //this will execute in a loop until index = endValue
        numbers.push(index);        
    }
        return numbers;

}

//Display the numbers and mark the even numbers bold
//Display or view function
function displayNumbers(){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0) {
            className = "even";

        }
        else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}