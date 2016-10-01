ExampleRunner.run(function (console) {
    function identity(arg: number): number {
        return arg;
    }
    console.log("identity: ", identity(13));

    function identity2(arg: any): any {
        return arg;
    }
    console.log("identity2: ", identity2("13"));

    function identity3<T>(arg: T): T {
        console.log("identity3: ", typeof arg);
        return arg;
    }
    console.log("identity3.1: ", identity3(13.001));
});

ExampleRunner.run(function (console) {
    function identity(arg: number): number {
        return arg;
    }
    console.log("identity: ", identity(13));

    function identity2(arg: any): any {
        return arg;
    }
    console.log("identity2: ", identity2("13"));

    function identity3<T>(arg: T): T {
        console.log("identity3: ", typeof arg);
        return arg;
    }
    console.log("identity3.1: ", identity3(13.001));
    console.log("Test", console);

    let output = identity3<string>("myString");  // type of output will be 'string'
    console.log("output", output);

    let output2 = identity3("myString");  // type of output will be 'string'
    console.log("output2", output2);



});

ExampleRunner.run(function (console) {
    function identity<T>(arg: T): T {
        return arg;
    }

    function loggingIdentity<T>(arg: T[]): T[] {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }

    function loggingIdentity2<T>(arg: Array<T>): Array<T> {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }
    loggingIdentity2(new Array<number>(1, 2, 3, 4));
});




ExampleRunner.run(function (console) {

    function identity<T>(arg: T): T {
        return arg;
    }

    let myIdentity1: <T>(arg: T) => T = identity;
    let myIdentity2: <U>(arg: U) => U = identity;
    let myIdentity3: { <T>(arg: T): T } = identity;

    interface GenericIdentityFn { <T>(arg: T): T; }
    interface GenericIdentityFn2<T> { (arg: T): T; }

    let myIdentity4: GenericIdentityFn = identity;
    let myIdentity5: GenericIdentityFn2<number> = identity;


});





ExampleRunner.run(function (console) {
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };

    let stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "teste  ";
    stringNumeric.add = function (x, y) { return x + y; };

    console.log((stringNumeric.add(stringNumeric.zeroValue, "test")));


});

ExampleRunner.run(function (console) {
    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }
});

ExampleRunner.run(function (console) {

    function copyFields<T extends U, U>(target: T, source: U): T {
        for (let id in source) {
            target[id] = source[id];
        }
        return target;
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };

    copyFields(x, { b: 10, d: 20 }); // okay
    //copyFields(x, { Q: 90 });  // error: property 'Q' isn't declared in 'x'.
});


ExampleRunner.run(function (console) {

    function create<T>(c: { new (): T; }): T {
        return new c();
    }



});



ExampleRunner.run(function (console) {
    interface Pessoa {
        name: String
    }

    class BeeKeeper implements Pessoa {
        hasMask: boolean;
        name: String;
    }

    class ZooKeeper implements Pessoa  {
        nametag: string;
        name: String;
    }

    class ZebraKeeper {
        hight: number;
        name: String;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
    }

    class Zebra extends Animal {
        keeper: ZebraKeeper;
    }

    function findKeeper<A extends Animal, K extends Pessoa>(a: {
        new (): A;
        prototype: { keeper: K }
    }): K {

        return a.prototype.keeper;
    }

    findKeeper(Lion).nametag;  // typechecks!
    findKeeper(Bee).hasMask;
    findKeeper(Zebra).hight;

});