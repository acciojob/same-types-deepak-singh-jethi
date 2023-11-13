function isSameType(value1, value2) {
  // Check if both values are NaN
     if (type1 === "number" && isNaN(value1) && type2 === "number" && isNaN(value2)) {
    // Both values are NaN
    return true;
  }

  // Check if the types are the same
  return typeof value1 == typeof value2;
}

// Get user input using prompt
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Display the result
alert(isSameType(value1, value2));
