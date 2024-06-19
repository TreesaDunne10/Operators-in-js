/*Ques1. Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator?

Sol1. The ternary operator in javascript is a shorthand way of writing an 'if-else' statement. It is called "ternary" because it involves three parts: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. 

The syntax:
condition ? expressionIfTrue : expressionIfFalse;
*/
const number = 7;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);
