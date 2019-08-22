let lineNumber = prompt("Entre un nombre de ligne");
let pyramideLine="";
let hash = "#";
let space = " ";
let a = 0

for (var i = lineNumber; i > 0; i--) {
	pyramideLine += space.repeat(i - 1).concat(hash.repeat( a += 1)) + "\n";
};

console.log(pyramideLine);
