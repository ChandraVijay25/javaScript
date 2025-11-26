// ============ BASIC IF =============
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}


// ============ IF - ELSE =============
let marks = 40;
if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ============ IF - ELSE IF - ELSE ============
let temp = 30;
if (temp > 35) {
    console.log("Very Hot");
} else if (temp > 25) {
    console.log("Warm Weather");
} else if (temp > 15) {
    console.log("Cool Weather");
} else {
    console.log("Cold Weather");
}


// ============ MULTIPLE CONDITIONS ( && , || ) =============
let userLoggedIn = true;
let hasPremium = false;

if (userLoggedIn && hasPremium) {
    console.log("Welcome Premium User");
} else if (userLoggedIn || hasPremium) {
    console.log("Welcome Basic User");
} else {
    console.log("Please Login");
}


// ============ NESTED IF =============
let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Access Granted");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("User Not Found");
}
