function f(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
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
var a;
function foo() {
    // okay to capture 'a'
    return a1;
}
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();
var a1;
var x1 = 100; // error: can't have both declarations of 'x'
function g() {
    var x1 = 100;
}
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var _loop_1 = function(i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var _loop_2 = function(i, j) {
    setTimeout(function () { console.log(i, j); }, 100 * i);
};
for (var i = 0, j = 2; i < 10; i++) {
    _loop_2(i, j);
}
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
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
var input2 = [1, 2];
var first = input2[0], second = input2[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
function fu(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
//fu(input2);
var _b = [1, 2, 3, 4], first1 = _b[0], rest = _b.slice(1);
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var first3 = [1, 2, 3, 4][0];
console.log(first3); // outputs 1
var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
var o = {
    ar: "foo",
    br: 12,
    cr: "bar"
};
var ar = o.ar, br = o.br;
var _d = { ah: "baz", bh: 101 }, ah = _d.ah, bh = _d.bh;
var newName1 = o.ar, newName2 = o.br;
var test = o.ar, test2 = o.br;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function ftest(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function fsad(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 12 : _c;
    // ...
}
fsad({ a: "Doug" }); // ok, default to {a: "", b: 0}
function faqui(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
faqui({ a: "yes" }); // ok, default b = 0
faqui(); // ok, default to {a: ""}, which then defaults b = 0
var _a;
//faqui({}) // error, 'a' is required if you supply an argument 
