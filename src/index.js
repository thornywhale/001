"use strict";

// require core modules

// require node modules
const _ = require("lodash");

// require own modules
const Component = require("./Component");
require("./style.css");

// -------

console.log("lodash random usage: " + _.random(1, 100));
console.log("43645u74");
console.log(43547);
console.log("hi!");
const resultSummaTwoNumbers = 5 + 2;
console.log(resultSummaTwoNumbers);

const comp = new Component();
comp.render();
