const number = [1,2,3,4,5,6,7,8,9,10];
let number0 = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    number0.push(result);
}

console.log(number0);

const number2 = [1,2,3,4,5,6,7,8,9,10];
const result0 = number2.map(function (number) {
    return number * number;
})
console.log(result0 );


const number3 = [1,2,3,4,5,6,7,8,9,10];
const result = number3.map((element) => element * element);
console.log(result); 

const number4 = [1,2,3,4,5,6,7,8,9,10];
const equal = number4.map(x => x * x);
console.log(equal); 

const number5 = [1,2,3,4,5,6,7,8,9,10];
console.log(number5.map(x => x * x));

const number6 = [1,2,3,4,5,6,7,8,9,10];
const filter = number6.filter(x => x > 5);
// console.log(number5.map(x => x * x));
console.log(filter);

const number7 = [1,2,3,4,5,6,7,8,9,10];
const filter1 = number7.filter(x => x % 2 == 0);
console.log(filter1);

const number8 = [1,2,3,4,5,6,7,8,9,10];
const filter2 = number8.filter(x => x % 2 == 0);
console.log(filter2);

const number9 = [1,2,3,4,5,6,7,8,9,10];
const filter3 = number9.filter(x => x % 2 !== 0);
console.log(filter3);

const number10 = [1,2,3,4,5,6,7,8,9,10];
const find = number10.find(x => x % 2 == 0);
console.log(find);

const number10 = [1,2,3,4,5,6,7,8,9,10];
console.log(number10.find(x => x % 2 !== 0));
