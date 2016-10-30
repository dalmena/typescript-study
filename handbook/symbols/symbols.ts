
ExampleRunner.run(function (console) {
    let sym1 = Symbol();
    let sym2 = Symbol("key");

    let sym3 = Symbol("key");

    sym2 === sym3;
});

ExampleRunner.run(function (console) {
    let sym = Symbol();
 
    let obj = {
        [sym]: "value"
    };

    console.log(obj[sym]);
});

ExampleRunner.run(function (console) {
    const getClassNameSymbol = Symbol();

    class C {
        [getClassNameSymbol](){
            return "C";
        }
    }

    let c = new C();
    let className = c[getClassNameSymbol]();

    console.log(className);
});