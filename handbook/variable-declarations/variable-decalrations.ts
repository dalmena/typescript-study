function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }


    // Error: 'b' doesn't exist here
    //return b;
}

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

function h() {
    a++; // illegal to use 'a' before it's declared;
}
let a;


function foo() {
    // okay to capture 'a'
    return a1;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a1;

var x1 = 100; // error: can't have both declarations of 'x'

function g() {
    let x1 = 100;
}

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}


function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity();
}

for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
for (let i = 0, j = 2; i < 10; i++) {
    setTimeout(function () { console.log(i, j); }, 100 * i);
}

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

//// Error
//kitty = {
//    name: "Danielle",
//    numLives: numLivesForCat
//};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;


let input2: number[] = [1, 2];

let [first, second] = input2;

// swap variables
[first, second] = [second, first];

console.log(first); // outputs 1
console.log(second); // outputs 2

function fu([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
//fu(input2);


let [first1, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first3] = [1, 2, 3, 4];
console.log(first3); // outputs 1



let [, second2, , fourth] = [1, 2, 3, 4];



let o = {
    ar: "foo",
    br: 12,
    cr: "bar"
}
let {ar, br} = o;

let { ah, bh } = { ah: "baz", bh: 101 };
let {ar: newName1, br: newName2} = o;

let {ar: test, br: test2}: { ar: string, br: number } = o;

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let {a, b = 1001} = wholeObject;
}

type C = { a: string, b?: number }
function ftest({a, b}: C): void {
    // ...
}



function fsad({a, b = 12} = { a: "", b: 0 }): void {
    // ...
}
fsad({ a: "Doug"}); // ok, default to {a: "", b: 0}

function faqui({a, b = 0} = { a: "" }): void {
    // ...
}
faqui({ a: "yes" }) // ok, default b = 0
faqui() // ok, default to {a: ""}, which then defaults b = 0
//faqui({}) // error, 'a' is required if you supply an argument