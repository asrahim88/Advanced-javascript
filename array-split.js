const number = [1,2,3,4,5,6,7,8,9,10]
const part = number.slice(2, 8);
console.log('Cutting Item: ',part);
console.log("Main Array: ",number);

const number0 = [1,2,3,4,5,6,7,8,9,10]
const removed = number0.splice(2, 3, 20, 21, 22);
console.log(" Removed Item: ", removed);
console.log("Main Array", number0);

const number1 = [1,2,3,4,5,6,7,8,9,10]
const removed0 = number1.splice(2, 3, 20, 21, 22,23,24,25,26,27,28,29,30);
console.log(" Removed Item: ", removed0);
console.log("Main Array", number1);

const number2 = [1,2,3,4,5,6,7,8,9,10]
const join = number2.join(' ');
console.log(" Removed Item: ", join);

console.log("Main Array", number2);
