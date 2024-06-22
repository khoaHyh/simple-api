import { HelloWorld } from "./services/hello_world";

const instance = new HelloWorld();

console.log("===============================");
console.log(instance.sayHello());
console.log("===============================");
