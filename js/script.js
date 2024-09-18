const firstName = "City";
let age = 12;

// if age is greater than 20 and less than 50, console log "you are young"

// if age is greater than or equal to 50, console log "you are getting older"

// if age is less than 20 and greater than 12, console log "you are a teenager"

if (age > 20 && age < 50 ) {
    console.log("you are young");
 } else if (age >= 50 ) {
     console.log("you are getting older");
 } else if (age < 20 && age > 12) {
        console.log("you are a teenager");
 }

 else {
    console.log("you are a child")
 }