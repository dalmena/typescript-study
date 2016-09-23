let isDone = false;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
let list = [1, 2, 3];
let list2 = [1, 2, 3];
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
//x[6] = true; // Error, 'boolean' isn't 'string | number'
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 15] = "Green";
    Color2[Color2["Blue"] = 16] = "Blue";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
let c3 = Color3.Green;
let colorName = Color[2];
alert(colorName);
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
let list3 = [1, true, "free"];
list3[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
let unusable = undefined;
// Not much else we can assign to these variables!
let u = undefined;
let n = null;
let someValue = "this is a string";
let strLength = someValue.length;
let strLength2 = someValue.length;
