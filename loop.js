// ================== 1. FOR LOOP ==================
console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
    console.log("Count =", i);
}


// ================== 2. WHILE LOOP ==================
console.log("\nWHILE LOOP:");
let a = 1;
while (a <= 5) {
    console.log("Number =", a);
    a++;
}


// ================== 3. DO-WHILE LOOP ==================
console.log("\nDO-WHILE LOOP:");
let b = 1;
do {
    console.log("Value =", b);
    b++;
} while (b <= 5);


// ================== 4. FOR-IN LOOP (Used for Objects) ==================
console.log("\nFOR-IN LOOP (Object):");
let student = { name: "Rahul", age: 20, grade: "A" };
for (let key in student) {
    console.log(key, ":", student[key]);
}


// ================== 5. FOR-OF LOOP (Used for Arrays) ==================
console.log("\nFOR-OF LOOP (Array):");
let fruits = ["Apple", "Banana", "Mango"];
for (let item of fruits) {
    console.log(item);
}


// ================== 6. LOOP THROUGH ARRAY USING FOR ==================
console.log("\nFOR LOOP ARRAY:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit =", fruits[i]);
}


// ================== 7. NESTED LOOP ==================
console.log("\nNESTED LOOP (2 Tables):");
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`Table of ${i}: ${i} x ${j} = ${i * j}`);
    }
}


// ================== 8. BREAK & CONTINUE ==================
console.log("\nBREAK Example:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) break; // stops loop
    console.log(i);
}

console.log("\nCONTINUE Example:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // skips 5
    console.log(i);
}
