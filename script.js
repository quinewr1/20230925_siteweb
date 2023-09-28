
let space = "-----------------------------------";
console.log(space);

/* 
***********************/

var test = "test var";
test = "test var 2";
console.log(test);

console.log(space);

/* string
***********************/

const prenom ="Erwan";
console.log(prenom);
console.log(typeof prenom);

console.log(space);

/* Number
***********************/

var age = 40;
console.log(age);
console.log(typeof age);

console.log(space);

/* Boolean
***********************/

let isAdult = false;
console.log(isAdult);
console.log(typeof isAdult);

console.log(space);

/* undefined
***********************/

let price;
console.log(price);
console.log(typeof price);

/* Null
***********************/

console.log(space);

console.log(null);
console.log(typeof null);

/* Big Int
***********************/

console.log(space);

let bigInt = 8978465465453212313n;
console.log(bigInt);
console.log(typeof bigInt);

/* Object
***********************/
console.log(space);

const france = {
    name: "France",
    capital:"Paris",
    population:"70 millions"
};
console.log(france.name);
console.log(typeof france);

/* Function
***********************/
console.log(space);

function getSquare(a){
    return a * a;
}
console.log(getSquare(5));
console.log(typeof getSquare);


/* Tableau
***********************/

console.log(space);


const salaire = [2500, 1700, 8700, 5600, "Robert", "Jean", "Paul", "Emilie"];

console.log(salaire[3]);
console.log(typeof salaire);

/* Tableau complet
***********************/

console.log(space);

salaire.forEach(
    salaires => console.log(salaires)
);


