/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const fixer = `if (typeof exports === "undefined") {
    var exports = window;
}`;

const file = fs.readFileSync(path.join(__dirname, "../dist/hermes.js"), "utf8");

const fileArray = file.split("\n");

fileArray.splice(1, 0, fixer);

fs.writeFileSync(
    path.join(__dirname, "../dist/hermes.js"),
    fileArray.join("\n"),
);
