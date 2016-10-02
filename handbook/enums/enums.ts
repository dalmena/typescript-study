

ExampleRunner.run(function(){
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }
});

ExampleRunner.run(function(){
    enum FileAccess {
        // constant members
        None,
        Read    = 1 << 1,
        Write   = 1 << 2,
        ReadWrite  = Read | Write,
        // computed member
        G = "123".length
    }
});

ExampleRunner.run(function(){
    enum Enum {
        A
    }
    let a = Enum.A;
    let nameOfA = Enum[Enum.A]; // "A"
});

ExampleRunner.run(function(){
    const enum Enum {
        A = 1,
        B = A * 2
    }

    var x = Enum.A;
});

ExampleRunner.run(function(){
    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }

    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
});

declare enum Enum {
    A = 1,
    B,
    C = 2
}