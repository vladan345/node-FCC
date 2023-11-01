const path = require("path");

console.log(path.sep); // Separator

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // Path building

const base = path.basename(filePath);
console.log(base); // Filename

const absolute = path.resolve(__dirname, "content", "subfolder", "testt.text");
console.log(absolute); // Absolute path
