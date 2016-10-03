ExampleRunner.run(function(){
    interface Named {
        name: string;
    }

    class Person {
        name: string;
    }

    let p: Named;
    // OK, because of structural typing
    p = new Person();
});

ExampleRunner.run(function(){
    let x = (a: number) => 0;
    let y = (b: number, s: string) => 0;

    y = x; // OK
    //x = y; // Error
});

ExampleRunner.run(function(){
    enum EventType { Mouse, Keyboard }

    interface Event { timestamp: number; }
    interface MouseEvent extends Event { x: number; y: number }
    interface KeyEvent extends Event { keyCode: number }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
        /* ... */
    }

    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));

    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    //listenEvent(EventType.Mouse, (e: number) => console.log(e));

});

ExampleRunner.run(function(){
    function invokeLater(args: any[], callback: (...args: any[]) => void) {
        /* ... Invoke callback with 'args' ... */
    }

    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2, 3], (x, y) => console.log(x + ", " + y));

    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1], (x?, y?) => console.log(x + ", " + y));
});

ExampleRunner.run(function(){
    const enum Status { Ready, Waiting }
    const enum Color { Red, Blue, Green }

    let status = Status.Ready
    //status = Color.Green;  //error
});

ExampleRunner.run(function(){
    class Animal {
        feet: number;
        constructor(name: string, numFeet: number) { }
    }

    class Size {
        feet: number;
        constructor(numFeet: number) { }
    }

    let a: Animal;
    let s: Size;

    a = s;  //OK
    s = a;  //OK
});

ExampleRunner.run(function(){
    interface Empty<T> {
    }
    let x: Empty<number>;
    let y: Empty<string>;

    x = y;
});

ExampleRunner.run(function(){
    interface NotEmpty<T> {
        data: T;
    }
    let x: NotEmpty<number>;
    let y: NotEmpty<string>;

    //x = y;  // error, x and y are not compatible
});

ExampleRunner.run(function(){
    let identity = function<T>(x: T): T {
        return x;
    }

    let reverse = function<U>(y: U): U {
        return y;
    }

    identity = reverse;
});

ExampleRunner.run(function(){
});
ExampleRunner.run(function(){
});
