const input = require("readline-sync");

let password = "";
let isValid = false;

do {
    // 1. Prompt the user
    password = input.question("Enter a new password: ");

    // 2. Initialize requirement trackers
    let hasLength = password.length >= 8;
    let hasUpper = false;
    let hasNumber = false;

    // 3. Iterate through the string to check characters
    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    // 4. Verify all conditions
    if (hasLength && hasUpper && hasNumber) {
        isValid = true;
        console.log("Success! Your password is valid.");
    } else {
        console.log("Error: Password must be 8+ chars, have an uppercase letter, and a number.");
        console.log("Please try again.");
    }

} while (!isValid); // 5. Continue looping if NOT valid