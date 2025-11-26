// ================= ARITHMETIC OPERATORS =================
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition:       ", a + b);
console.log("Subtraction:    ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division:       ", a / b);
console.log("Modulus:        ", a % b);
console.log("Exponent:       ", a ** b);
console.log("Increment:      ", ++a); // pre-increment
console.log("Decrement:      ", --b); // pre-decrement


// ================= ASSIGNMENT OPERATORS =================
let x = 20;
console.log("\nAssignment Operators:");
x += 5;   
console.log("x += 5  →", x);
x -= 5;   
console.log("x -= 5  →", x);
x *= 2;  
console.log("x *= 2  →", x);
x /= 2;  
console.log("x /= 2  →", x);
x %= 3;  
console.log("x %= 3  →", x);


// ================= COMPARISON OPERATORS =================
let y = 10, z = "10";

console.log("\nComparison Operators:");
console.log("Equal (==):          ", y == z);
console.log("Strict Equal (===):  ", y === z);
console.log("Not Equal (!=):      ", y != z);
console.log("Greater Than:        ", y > 5);
console.log("Less Than:           ", y < 5);
console.log("Greater or Equal:    ", y >= 10);
console.log("Less or Equal:       ", y <= 5);


// ================= LOGICAL OPERATORS =================
console.log("\nLogical Operators:");
console.log("AND (&&):  ", (5 < 10) && (10 > 2));
console.log("OR (||):   ", (5 < 10) || (10 < 2));
console.log("NOT (!):   ", !(5 < 10));


// ================= BITWISE OPERATORS =================
console.log("\nBitwise Operators:");
console.log("AND (&) :  ", 5 & 3);
console.log("OR (|)  :  ", 5 | 3);
console.log("XOR (^) :  ", 5 ^ 3);
console.log("Left Shift (<<):", 5 << 1);
console.log("Right Shift (>>):", 5 >> 1);


// ================= TERNARY OPERATOR =================
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("\nTernary Operator:");
console.log("Age Status =", result);
