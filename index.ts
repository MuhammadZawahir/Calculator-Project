import inquirer from "inquirer";
interface answers{
    numberOne:number,
    numberTwo:number,
    operator:string
}
 
let answers: answers =await inquirer.prompt([
   { type:"number",
    name:"numberOne",
    message:"Please enter the first number:"
   },
   {
    type:"number",
    name:"numberTwo",
    message:"Please enter the second number:"
   },
   {
    type:"list",
    name:"operator",
    message:"Select one of the following operators:",
    choices:["+", "-", "*", "/"]
   }
])
const {numberOne, numberTwo, operator}=answers

if (numberOne && numberTwo &&operator){
let result:number=0

    if (operator==="+"){
        result =numberOne + numberTwo
    }
    if (operator==="-"){
        result =numberOne - numberTwo
    }
    if (operator==="/"){
        result =numberOne / numberTwo
    }
    if (operator==="*"){
        result =numberOne * numberTwo
    }
    console.log("\nResult: " + result);
    
}
else {
    console.log("You  have entered invalid input.");
    
}