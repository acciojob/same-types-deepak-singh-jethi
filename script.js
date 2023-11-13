function isSameType(value1, value2) {

     if (isNaN(value1) && isNaN(value2)) {
 
    return true;
  }
	else if(isNaN(value1) && !isNaN(value2) || !isNaN(value1) && isNaN(value2) ){
		return false;
	}

  // Check if the types are the same
  return typeof value1 == typeof value2;
}

// Get user input using prompt
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Display the result
alert(isSameType(value1, value2));
