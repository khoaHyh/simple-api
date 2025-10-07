import { $HelloWorld } from "./singletons";

const instance = $HelloWorld;

console.log("===============================");
console.log(instance.sayHello());
console.log("===============================");
