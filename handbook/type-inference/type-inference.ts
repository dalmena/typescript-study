ExampleRunner.run(function (console) {
    let x = 3;
    let x2 = [0, 1, null];
});

ExampleRunner.run(function (console) {
    window.onmousedown = function (mouseEvent) {
        //console.log(mouseEvent.buton);  //<- Error
    };
    window.onmousedown = function (mouseEvent: any) {
        console.log(mouseEvent.buton);  //<- Now, no error is given
    };
});

ExampleRunner.run(function (console) {
    interface Animal {
        x: number;
    }
    class Elephant implements Animal {
        nameElephant: string;
        x: number;
    }
    class Rhino implements Animal {
        x: number;
        nameRhino: string;
    }
    class Snake implements Animal {
        x: number;
        name: string;
    }
    function createZoo(): Animal[] {
        return [new Rhino(), new Elephant(),
        new Snake()];
    }

    let x = createZoo();
});

