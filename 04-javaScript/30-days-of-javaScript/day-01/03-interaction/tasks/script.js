let userFirstName = prompt("What's your first name?", "");
let userLastName = prompt("What's your Last name?", "");
let isAvailable = confirm("Are you available for this opportunity?");

alert(`User full name is ${userFirstName} ${userLastName}`);
let availabilityMessage;
if (isAvailable === true) {
  availabilityMessage = "And he is available";
} else {
  availabilityMessage = "And he is not available";
}
alert(availabilityMessage);
