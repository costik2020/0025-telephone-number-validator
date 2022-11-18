//Telephone Number Validator Project in JavaScript



function telephoneCheck(str) {

	// Pseudocode
	// Test if the string has a US prefix
		// Then if the US prefix==1 is correct
			// Test if string with the correct US prefix passes the phone regex
				// Then return true
				// Else return false
		// Else return false


		let phoneNumber = str;

		// Test if the string has a prefix
		let flagFoundUS = false;

		//let prefix="/(^[\d]{1}\s)|(^[\d]{2}\s)|(^[\d]{1}\()/";
		let regexFindPrefixUS = new RegExp( /(^\-[\d]{1}\s)|(^[\d]{1}\s)|(^[\d]{2}\s)|(^[\d]{1}\()/, "i");
		if ( regexFindPrefixUS.test(phoneNumber) == true ) {
			//Then if the US prefix==1 is correct
			console.log("Yes it has prefix");

			let outputMatch = phoneNumber.match(regexFindPrefixUS);
			//console.log( outputMatch )

			// Check if it is an US valid prefix
			for (let i=0; i<outputMatch.length; i++){
				if ((outputMatch[i] === "1 ") || (outputMatch[i] === "1(" )) {
					console.log("It is a US prefix");

					// Process the string to make it easier for the regexValidatePhone regex
					// To make it easyer to match
					if (outputMatch[i] === "1 ") {
						phoneNumber = phoneNumber.substring(2, phoneNumber.length);
						console.log("phoneNumber", phoneNumber);
					} else if (outputMatch[i] === "1("){
						phoneNumber = phoneNumber.substring(1, phoneNumber.length);
						console.log("phoneNumber", phoneNumber);
					}

					flagFoundUS = true;
					break;
				} else {
					console.log("No it is not a good prefix");

				}
			}

			if (flagFoundUS == false){
				// Found a prefix, but it is not US therefore invalid
				// Exit the program
				console.log("Found a prefix, but it is not US therefore invalid");
				return false;
			}


			//console.log(  phoneNumber.match(regexFindPrefixUS)  );

		}



	// At this point I have a phone number without a prefix or with a good US prefix
	// And I removed the prefix from phoneNumber variable to make regexValidatePhone easyer to match

	// Test if string without the correct US prefix passes the phone regex
	//let validatePhone="/(^(?<!\()[\d]{10}(?!\()(?!\d{1}))|(^[\d]{3}\-[\d]{3}\-[\d]{4})|(\d{3}\s\d{3}\s\d{4})|(\(\d{3}\)\s[\d]{3}\-[\d]{4})|(\(\d{3}\)[\d]{3}\-[\d]{4})/";
	let regexValidatePhone = new RegExp( /(^(?<!\()[\d]{10}(?!\()(?!\d{1}))|(^[\d]{3}\-[\d]{3}\-[\d]{4})|(\d{3}\s\d{3}\s\d{4})|(\(\d{3}\)\s[\d]{3}\-[\d]{4})|(\(\d{3}\)[\d]{3}\-[\d]{4})/, "i");



	if ( regexValidatePhone.test(phoneNumber) == true ){
		console.log("True number is valid: ",phoneNumber );
		return true;
	}else{
		console.log("False number is not valid: ",phoneNumber );
		return false;
	}





}


// Testing:
//telephoneCheck("555-555-5555");
//telephoneCheck("555 555 5555");
//telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("555-555-5555");




/*

Regex that I tested

// Prefix validator regex
regexUSprefix:
/^[\d]{1}\s/

regexUSprefix2:
/(^[\d]{1}\s)|(^[\d]{2}\s)|(^[\d]{1}\()/

regexUSprefix3:
/(^\-[\d]{1}\s)|(^[\d]{1}\s)|(^[\d]{2}\s)|(^[\d]{1}\()/



// Phone Nuber validator regex
regex1:
/([\d]{10})|([\d]{3}\-[\d]{3}\-[\d]{4})|(\d{3}\s\d{3}\s\d{4})|(\(\d{3}\)\s[\d]{3}\-[\d]{4})|(\(\d{3}\)[\d]{3}\-[\d]{4})/

regex2
/(^(?<!\()[\d]{10}(?!\()(?!\d{1}))|([\d]{3}\-[\d]{3}\-[\d]{4})|(\d{3}\s\d{3}\s\d{4})|(\(\d{3}\)\s[\d]{3}\-[\d]{4})|(\(\d{3}\)[\d]{3}\-[\d]{4})/

regex3:
/(^(?<!\()[\d]{10}(?!\()(?!\d{1}))|(^[\d]{3}\-[\d]{3}\-[\d]{4})|(\d{3}\s\d{3}\s\d{4})|(\(\d{3}\)\s[\d]{3}\-[\d]{4})|(\(\d{3}\)[\d]{3}\-[\d]{4})/



*/
