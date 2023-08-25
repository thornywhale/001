"use strict";

// require core modules

// require node modules
// const _ = require("lodash");
import _ from "lodash";

// require own modules
import { sum, pow } from "./Math";
const Component = require("./Component");
require("./style.css");
// -------

console.log("lodash random usage: " + _.random(1, 100));
const comp = new Component();
comp.render();
const root = document.getElementById("root");
const result = sum(1, 2, 3, 4, 5);
root.innerText = "Text in root, result = " + result;
