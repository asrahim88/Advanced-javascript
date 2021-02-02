const number = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 6) {
        break;
    }
    console.log(element);
}

const number0 = [1,2,-3,4,5,-6,7,-8,-9,10];

for (let i = 0; i < number0.length; i++) {
    const element = number0[i];
    if (element < 0) {
        break;
    }
    console.log(element);
}

const number0 = [1,2,-3,4,5,-6,7,-8,-9,10];

for (let i = 0; i < number0.length; i++) {
    const element = number0[i];
    if (element < 0) {
        continue;
    }
    console.log(element);
}
