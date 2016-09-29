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
        console.log("identity3: ",typeof arg);
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
});