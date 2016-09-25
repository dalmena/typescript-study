function printLabel1(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "Size 10 Object"};
printLabel(myObj1);

//example 2

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj2 = {size: 10, label: "Size 10 Object"};
printLabel(myObj2);


// example 3

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

//example 4
/*
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'collor' does not exist on type 'SquareConfig'
        newSquare.color = config.collor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});*/


//example 5

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!


let ax: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = ax;
/*ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
ax = ro; // error! */


//example 6

(function(){
    
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        return null;
    }

    let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);


})();


//example 7


(function(){

    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }
        
    let squareOptions = { colour: "red", width: 100 };
    let mySquare = createSquare(squareOptions);

})();

//example 8

(function(){

    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
        let result = source.search(subString);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    }
        

})();

//example 9

(function(){

    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }

    // Error: indexing with a 'string' will sometimes get you a Dog!
    /*interface NotOkay {
        [x: number]: Animal;
        [x: string]: Dog;
    }*/
})();

//example 10

(function(){

    interface NumberDictionary {
        [index: string]: number;
        length: number;    // ok, length is a number
        name: number;      // error, the type of 'name' is not a subtype of the indexer
    }

    var xx : NumberDictionary;
    xx["asd"] = 10;
    //xx["asd"].length = 12;

})();

//example 11

(function(){
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    let myArray: ReadonlyStringArray = ["Alice", "Bob"];
    //myArray[2] = "Mallory"; // error!
    
})();



//example 12

(function(){
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }
})();

//example 12

(function(){
    
    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }

    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("tick tock");
        }
    }

    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);

})();

//example 12

(function(){
    interface Shape {
        color: string;
    }

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
})();

//example 12

(function(){
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }

    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }

    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
})();

//example 12

(function(){
    class Control {
        private state: any;

        test():void {
            let x = <Control>{};
            x.state = 10;
        }
    }
    
    interface SelectableControl extends Control {
        select(): void;
    }

    class Button extends Control {
        select() { }
    }

    class TextBox extends Control {
        select() { }
    }

    class Image extends Control {
    }

    class Location {
        select() { }
    }

    class MyTest extends Control implements SelectableControl {
        select(): void{

        }
    }

    class A {
        public test() : void {

        }
    }

    class B extends A {
        public test() : void {

        }
    }
})();