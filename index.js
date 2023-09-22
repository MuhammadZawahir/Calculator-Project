"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let answers = await inquirer_1.default.prompt([
    { type: "number",
        name: "numberOne",
        message: "Please enter the first number:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter the second number:"
    },
    {
        type: "list",
        name: "operator",
        message: "Select one of the following operators:",
        choices: ["+", "-", "*", "/"]
    }
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("\nResult: " + result);
}
else {
    console.log("You  have entered invalid input.");
}
