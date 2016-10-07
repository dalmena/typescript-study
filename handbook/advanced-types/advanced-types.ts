ExampleRunner.run(function (console) {
    function extend<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }

    class Person {
        constructor(public name: string) { }
    }
    interface Loggable {
        log(): void;
    }
    class ConsoleLogger implements Loggable {
        log() {
            // ...
        }
    }
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
});

ExampleRunner.run(function (console) {
    /**
     * Takes a string and adds "padding" to the left.
     * If 'padding' is a string, then 'padding' is appended to the left side.
     * If 'padding' is a number, then that number of spaces is added to the left side.
     */
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    console.log(padLeft("Hello world", 4)); // returns "    Hello world"
    console.log(padLeft("Hello world", "tesxt")); // returns "    Hello world"
    //console.log(padLeft("Hello world", true)); // returns "    Hello world"
});

ExampleRunner.run(function (console) {
    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    function getSmallPet(): Fish | Bird {
        return null;
    }

    let pet = getSmallPet();
    pet.layEggs(); // okay
    //pet.swim();    // errors
});

ExampleRunner.run(function (console) {
    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    function getSmallPet(): Fish | Bird {
        return null;
    }

    let pet = getSmallPet();

    // Each of these property accesses will cause an error
    if ((<Fish>pet).swim) {
        (<Fish>pet).swim();
    }
    else {
        (<Bird>pet).fly();
    }
});

ExampleRunner.run(function (console) {
    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    function getSmallPet(): Fish | Bird {
        return null;
    }

    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }

    let pet = getSmallPet();

    // Each of these property accesses will cause an error
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
});

ExampleRunner.run(function (console) {
    function isNumber(x: any): x is number {
        return typeof x === "number";
    }

    function isString(x: any): x is string {
        return typeof x === "string";
    }

    function padLeft(value: string, padding: string | number) {
        if (isNumber(padding)) {
            return Array(padding + 1).join(" ") + value;
        }
        if (isString(padding)) {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
});

ExampleRunner.run(function (console) {
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
});

ExampleRunner.run(function (console) {
    interface Padder {
        getPaddingString(): string
    }

    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }

    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }

    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }

    // Type is 'SpaceRepeatingPadder | StringPadder'
    let padder: Padder = getRandomPadder();

    if (padder instanceof SpaceRepeatingPadder) {
        padder; // type narrowed to 'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // type narrowed to 'StringPadder'
    }
});

ExampleRunner.run(function (console) {
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        if (typeof n === "string") {
            return n;
        }
        else {
            return n();
        }
    }
});

ExampleRunner.run(function (console) {
    type Container<T> = { value: T };

    type Tree<T> = {
        value: T;
        left: Tree<T>;
        right: Tree<T>;
    }

    let x : Tree<number>

    type LinkedList<T> = T & { next: LinkedList<T> };

    interface Person {
        name: string;
    }

    var people: LinkedList<Person>;
    var s = people.name;
    var s = people.next.name;
    var s = people.next.next.name;
    var s = people.next.next.next.name;

    //type Yikes = Array<Yikes>; // error
});

ExampleRunner.run(function (console) {
    /*
    type Alias = { num: number }

    interface Interface {
        num: number;
    }

    declare function aliased(arg: Alias): Alias;
    declare function interfaced(arg: Interface): Interface;
    */
});



ExampleRunner.run(function (console) {
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
    class UIElement {
        animate(dx: number, dy: number, easing: Easing) {
            if (easing === "ease-in") {
                // ...
            }
            else if (easing === "ease-out") {
            }
            else if (easing === "ease-in-out") {
            }
            else {
                // error! should not pass null or undefined.
            }
        }
    }

    let button = new UIElement();
    button.animate(0, 0, "ease-in");
    //button.animate(0, 0, "uneasy");
});

ExampleRunner.run(function (console) {
    function createElement(tagName: "img"): HTMLImageElement;
    function createElement(tagName: "input"): HTMLInputElement;
    // ... more overloads ...
    function createElement(tagName: string): Element {
        return null;
    }

    //createElement("asdas"); // Error!!!
});

ExampleRunner.run(function (console) {
    interface Square {
        kind: "square";
        size: number;
    }
    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }
    interface Circle {
        kind: "circle";
        radius: number;
    }
    interface Triangle {
        kind: "triangle"
        base: number
        height: number
    }

    type Shape = Square | Rectangle | Circle;

    function area(s: Shape) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
        }
    }

    type Shape2 = Square | Rectangle | Circle | Triangle;

    function area2(s: Shape2) : number  {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
            case "triangle": return s.base * s.height / 2;
        }
        // should error here - we didn't handle case "triangle"
    }
});


ExampleRunner.run(function (console) {
    interface Square {
        kind: "square";
        size: number;
    }
    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }
    interface Circle {
        kind: "circle";
        radius: number;
    }
    interface Triangle {
        kind: "triangle"
        base: number
        height: number
    }

    type Shape = Square | Rectangle | Circle | Triangle;

    function assertNever(x: never): never {
        throw new Error("Unexpected object: " + x);
    }

    function area(s: Shape) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
            //default: return assertNever(s); // error here if there are missing cases
        }
    }
});


ExampleRunner.run(function (console) {
    class BasicCalculator {
        public constructor(protected value: number = 0) { }
        public currentValue(): number {
            return this.value;
        }
        public add(operand: number): this {
            this.value += operand;
            return this;
        }
        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }
        // ... other operations go here ...
    }

    let v = new BasicCalculator(2)
                .multiply(5)
                .add(1)
                .currentValue();

    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
        // ... other operations go here ...
    }

    let v2 = new ScientificCalculator(2)
            .multiply(5)
            .sin()
            .add(1)
            .currentValue();
});


ExampleRunner.run(function (console) {

});


ExampleRunner.run(function (console) {

});


ExampleRunner.run(function (console) {

});


ExampleRunner.run(function (console) {

});

ExampleRunner.run(function (console) {

});