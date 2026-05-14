//javaScript execution context

//global execution context
//function execution context
//eval execution context

//steps
//1.js crewate global execution context and put it in execution context stack
//2.js start executing line by line
//3.if js encounter function then it will create function execution context and put it in execution context stack
//4.js execute function line by line and after executing function it will pop out function execution context from execution 
//context stack and continue executing global execution context
//5.if js encounter eval then it will create eval execution context and put it in execution context stack
//6.js execute eval line by line and after executing eval it will pop out eval execution context from execution 
//context stack and continue executing global execution context
//7.js will continue executing global execution context until it finish executing all the code and then it will 
//pop out global execution context from execution context stack and js will stop executing

//code for understanding execution context
console.log("hello world");
function a() {
    console.log("inside function a");
    function b() {
        console.log("inside function b");
    }
    b();
}
a();
//output
//hello world
//inside function a
//inside function b