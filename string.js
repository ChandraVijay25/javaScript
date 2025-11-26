// ================== BASIC STRING ==================
let name = "Chandra Vijay Singh";
console.log("Name:", name);


// ================== STRING LENGTH ==================
console.log("\nLength of string:", name.length);


// ================== STRING CONCATENATION ==================
let fname = "Chandra";
let lname = "Singh";
console.log("\nConcatenation:", fname + " " + lname);
console.log("Using concat():", fname.concat(" ", lname));


// ================== TEMPLATE LITERALS (ES6) ==================
let age = 21;
console.log(`\nMy name is ${fname} ${lname} and I am ${age} years old.`);


// ================== STRING METHODS ==================
let text = "JavaScript Programming";

// convert case
console.log("\nUpperCase:", text.toUpperCase());
console.log("LowerCase:", text.toLowerCase());

// slicing / substring
console.log("\nSlice (0-10):", text.slice(0, 10));
console.log("Substring (11-21):", text.substring(11, 21));

// replace text
console.log("\nReplace:", text.replace("Programming", "Coding"));

// trim (remove spaces)
let str = "   Hello World   ";
console.log("\nTrim:", str.trim());

// repeat
console.log("Repeat 3 times:", fname.repeat(3));


// ================== SEARCHING IN STRING ==================
let data = "I love JavaScript Programming";

console.log("\nIndex of 'JavaScript':", data.indexOf("JavaScript"));
console.log("Last Index of 'a':", data.lastIndexOf("a"));
console.log("Includes 'love'?", data.includes("love"));
console.log("Starts with 'I'?", data.startsWith("I"));
console.log("Ends with 'ing'?", data.endsWith("ing"));


// ================== SPLIT (STRING → ARRAY) ==================
let fruits = "Apple, Mango, Banana, Orange";
console.log("\nSplit String into Array:", fruits.split(", "));


// ================== JOIN (ARRAY → STRING) ==================
let arr = ["JavaScript", "is", "Fun"];
console.log("Join Array:", arr.join(" "));
