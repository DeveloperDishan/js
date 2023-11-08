

const person = ['mir', 'mezba', 'mahabub', 'nahid'];

// include return kore true false

/* const result = person.includes('dishan')
console.log(result) */

// slice
/* const result = person.slice(0, 3);
console.log(result)  */

/* const myarr = [1, 3, 47, 5]
const myarr2 = [...myarr]


myarr.push(7)
myarr2.push(6)

console.log(myarr)
console.log(myarr2) */

const myfuncion = (...params) => {
    console.log(params)
    let sum = 0;
    params.forEach(num => {
        sum = sum + num;
    })
    console.log(sum)
}

myfuncion(1, 2, 3, 45, 5)