interface IRunnableExample {
    (console?: IConsole) : void
}

interface IConsole {
    log (message?:string, ...optionalParameters: any[]) : void;
}

interface IExampleRunner {
    run(runnableExample: IRunnableExample) : void;
}

class HtmlConsole implements IConsole{
    private lineCount : number = 0;

    constructor(private console: Console, private rootElement: HTMLElement, private document: Document){
    }

    log (message?:string, ...optionalParameters: any[]) : void {
        this.console.log(message, optionalParameters);

        this.rootElement.appendChild(this.buildMessageElement(message, ...optionalParameters));        
    }

    private buildMessageElement(message?:string, ...optionalParameters: any[]) : HTMLElement {
        let lineElement = document.createElement("div");
        lineElement.className = "line";

        let lineCountElement = document.createElement("div");
        lineCountElement.className = "line-count";
        lineCountElement.innerText = (++this.lineCount).toString();
        lineElement.appendChild(lineCountElement);

        let lineContentElement = document.createElement("div");
        lineContentElement.className = "line-content";
        lineElement.appendChild(lineContentElement);
        
        let messageElement = document.createElement("span");
        messageElement.className = "message";
        messageElement.innerText = this.getText(message);
        lineContentElement.appendChild(messageElement);
        
        for(let optionalParameter of optionalParameters) {
            let optionalParameterElement = document.createElement("span"); 
            optionalParameterElement.className = "message optional-parameter";
            optionalParameterElement.innerText = this.getText(optionalParameter);
            lineContentElement.appendChild(optionalParameterElement);   
        }         
        
        return lineElement;
    }

    private getText(obj: any) : string {
        if(typeof(obj) == 'string' || typeof(obj) == 'number')
            return <string>obj;

        return JSON.stringify(obj);
    }
}

class ElementExampleRunner implements ExampleRunner {
    private exampleNumber: number = 0;
    
    constructor(private rootElement: HTMLElement, private document: Document, private console: Console){

    }

    run(runnableExample: IRunnableExample) : void {
        this.exampleNumber++;
        
        var exampleElement = this.document.createElement("div");
        exampleElement.className = "example";
        this.rootElement.appendChild(exampleElement);
        
        var exampleNumber = this.document.createElement("div");
        exampleNumber.className = "example-number";
        exampleNumber.innerText = `// Example ${this.exampleNumber};`;
        exampleElement.appendChild(exampleNumber);

        let codeExampleElement = this.document.createElement("pre");
        codeExampleElement.className = "code-example closed";
        
        let codeContentExampleElement = this.document.createElement("code");
        codeContentExampleElement.className = "javascript";
        codeContentExampleElement.innerText = runnableExample.toString();
        codeExampleElement.appendChild(codeContentExampleElement);

        (<any>window).hljs.highlightBlock(codeContentExampleElement);

        let listener : (this: HTMLPreElement, ev: UIEvent) => any = function(){
            if(this.className == "code-example closed")
                return this.className = "code-example opened";
            
            return this.className = "code-example closed";
        };

        codeExampleElement.onclick = listener;
        exampleElement.appendChild(codeExampleElement);

        var resultsTextElement = this.document.createElement("div");
        resultsTextElement.className = "results-text";
        resultsTextElement.innerText = '// Results';
        exampleElement.appendChild(resultsTextElement);

        var console = new HtmlConsole(this.console, exampleElement, this.document);

        try{
            runnableExample(console);
        }
        catch(ex){

        }
    }
}

class ExampleRunner {
    private static runner: IExampleRunner;
    private static runnableBuffer : IRunnableExample[] = [];

    static run(runnableExample: IRunnableExample){
        if(window.document.body == null){
            ExampleRunner.runnableBuffer.push(runnableExample);
            return;
        }

        ExampleRunner.createRunner();

        ExampleRunner.runner.run(runnableExample);
    }

    static runBuffer(){
        ExampleRunner.createRunner();                        
        
        for(let runnable of ExampleRunner.runnableBuffer){
            ExampleRunner.runner.run(runnable);                
        }
    }

    static createRunner(){
        if(ExampleRunner.runner == null)
            ExampleRunner.runner = new ElementExampleRunner(window.document.body, window.document, window.console);
    }
}

window.onload = function(){
    ExampleRunner.runBuffer();    
}