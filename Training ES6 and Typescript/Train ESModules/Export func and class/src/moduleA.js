import { greet, GreetMessage } from "./moduleB.js";

greet(`Hello Daffa`)

GreetMessage()
// GreetMessage().greet(); // You can't do this, must type new as alias
// new GreetMessage().greet(); // you can do this or
let GM = new GreetMessage();   // this
GM.greet();