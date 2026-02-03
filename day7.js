//Function Hoisting Error Example:
//This is an example of function hoisting error where function is called before its declaration.
//When using function expression, the function is not hoisted, so calling it before its declaration will result in an error.

//Code:
// console.log(addindArray(...myArray));
// const myArray= [1,2,3,4,5];
// const addindArray = function (...num) {     // here function expression is used to define the function addindArray.
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum;
// }

//The Solution:
//So to fix this error, we need to call the function after its declaration.
//The fix here is to move the function call after the function declaration.

//Code:
// const myArray= [1,2,3,4,5];
// const addindArray = function (...num) {     
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum;
// }
// console.log(addindArray(...myArray));


// The other way to fix this error is to use function declaration instead of function expression.
// Here I have used function declaration to define the function addindArray instead of function expression.
const myArray= [1,2,3,4,5];
function addindArray(...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(addindArray(...myArray));


//Variable Hoisting Error Example:
//This is an example of Variable hoisting error where variable(myArray) is used before its declaration.
//Here the function is hoisted but the variable is not hoisted, so using the variable before its declaration will result in an error.
//To fix this error, we need to call the function after the variable declaration.
//The fix here is to move the function call after the variable declaration.

//Code:
// console.log(addTwonumber(...myArray));
// const myArray= [1,2,3,4,5];
// function addTwonumber(...num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum;
// }
// console.log(addTwonumber(...myArray));

