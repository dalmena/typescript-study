let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${ age + 1} years old next month.`

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

//x[6] = true; // Error, 'boolean' isn't 'string | number'

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

enum Color2 { Red, Green = 15, Blue };
let c2: Color2 = Color2.Green;

enum Color3 { Red = 1, Green = 2, Blue = 4 };
let c3: Color3 = Color3.Green;


let colorName: string = Color[2];

alert(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.


let list3: any[] = [1, true, "free"];

list3[1] = 100;


function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let strLength2: number = (someValue as string).length;

