// for of , for in

const fruits = ['apple', 'orange', 'banana', 'pineapple'];
/* for (let i = 0; i < fruits.length; i++) {
    console.log(typeof fruits[i])
} */
for (element of fruits) {  //forEach
    // console.log(element)
}

// for in object

const person = {
    name: 'Dishanur',
    age: 23,
    job: 'web developer',
    ocupation: 'student',
}

for (key in person) {
    console.log(`${key}:`, person[key])
}

