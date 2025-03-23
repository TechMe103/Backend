let n=5;
for(let i=0; i<=n; i++){
    console.log("Hello" , i);
}
console.log("Bye");

console.log(process.argv);

let args = process.argv;

for(let i=2; i< args.length; i++){
    console.log("Hello " , args[i]);
}

  
const  math= require("./math");
console.log(math);

console.log(math.sum(2 , 2));
console.log(math.g);


//requiring all info from fruits directory to script.js file
const info = require("./fruits");
console.log(info[0]);  //apple


//for importing 
import {sum , g} from "./math.js";
console.log(sum(1 , 2));

//hv to generate random-words packages
import { generate } from "random-words";
console.log(generate());
