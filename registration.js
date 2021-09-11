// Sends an alert if there is an error when filling out the form.
window.onerror = function (message, url, line) {
    alert("Message : " + message );
    alert("File URL : " + url );
    alert("Line Number of Error: " + line );
   }
   // When the HTML has loaded completely this function is called.Registration Page.

   validate = function() {

    // Requirements for userID, firstName, lastName and phone number
    var userIDFormat = "^[a-zA-Z0-9]+$"; 

    /* This will allow the user to enter 
   only lower and uppercase alphabets , space and number before the form can be 
   appropriatley submitted, no special characters. */

    var nameFormat = "^[a-z A-Z]+$"; 
    /* This will only allow lower and upper case characters and space before 
    the form can be appropriatley submitted, no special characters.. */
    var isPhoneChar = /^[-.() \d]+$/; 
    // This identifies characters allowed in phoneNumber.

    var phoneFormat = "^\([(. ]([0-9]{3})\)[). ] ([0-9]{3})[-. ]([0-9]{4}) $";

     /* This will allow only digits but first digit can not be 0 and rest can
     be between 0-9 and total should not be exceed 10. Note counting starts at 0, 
    so 0-9 is 10 digits not 0-10, that would be 11. */

    var emailFormat = /^(([^!#$%&'*+/=?<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // This will allow only letters and numbers in the proper format.
        // Create and assign values to variables.

         var userID = document.getElementsByName('userID')[0].value; 
        // Variable declared to store the user ID field input.

         var password = document.getElementsByName('password')[0].value; 
        // Variable declared to store the password field input.

         var passwordVerify = document.getElementsByName('passwordVerify')[0].value; 
        // Variable declared to store the verify password field input.

         var firstName = document.getElementsByName('firstName')[0].value; 
         //  Variable declared to store the first name field input.

         var lastName = document.getElementsByName('lastName')[0].value; 
         // Variable declared to store the last name field input.

         var email = document.getElementsByName('email')[0].value; 
         // Variable declared to store the email address field input.

         var phoneNumber = document.getElementsByName('phoneNumber')[0].value; 
         // Variable declared to store the phone number field input.

         var signUpNewsletter = document.getElementsByName('signUpNewsletter'); 
         // Variable declared to store the news letter radio button input. 

        //this is the User ID validation. If userID does not match the given requirements.
        if(!userID.match(userIDFormat) ) {
        document.getElementById('erroruserID').innerHTML = 'A User ID may only contain letters and numbers.' + '</br>'; 
        // Sends back error result to the HTML resulting in an incomplete form.

    document.regform.userID.focus();
 // Focus on the faulty field.
    return false;
}
    // Clear the error alert.
    document.getElementById('erroruserID').innerHTML = '';

    // Password Validation function. If password length is less than 8 or empty.
if(password.length <8 || password=="") {
document.getElementById('errorpassword').innerHTML = 'Password length should be at least 8 characters.' + '</br>';
// Sends back error alert to the HTML.

document.regform.password.focus(); 
// Focus on the faulty field.
return false;
}
// Clear the error advice.
document.getElementById('errorpassword').innerHTML = '';

// If confirm password length is less than 8 or empty.
if(passwordVerify.length <8 || passwordVerify=="") {
document.getElementById('errorpasswordVerify').innerHTML = 'Confirm Password length is at least 8 characters.' + '</br>'; 
// Sends back error advice to the HTML.

document.regform.passwordVerify.focus(); 
// Focus on the erroneous field.
 return false;
 }
 // Clear the error advice.
 document.getElementById('errorpasswordVerify').innerHTML = '';
 // If password and cofirm password both are not same.
 if(passwordVerify != password) {
 document.getElementById('errorpasswordVerify').innerHTML = 'Confirm password is the same as Password entered.' + '</br>'; 
 // Sends back error advice to the HTML.
 document.regform.passwordVerify.focus(); 
 // Focus on the erroneous field.
 return false;
 }
 // Clear the error advice.
 document.getElementById('errorpasswordVerify').innerHTML = '';
 //////////////////// First Name Validation ////////////////////
 // If firstName does not match the name requirements.
 if(!firstName.match(nameFormat) ) {
 document.getElementById('errorfirstName').innerHTML = 'First Name may only contain letters and spaces.' + '</br>';
  // Sends back error advice to the HTML.
 document.regform.firstName.focus(); 
 // Focus on the erroneous field.
 return false;
 }
 // Clear the error alert.
 document.getElementById('errorfirstName').innerHTML = '';
 //////////////////// Last Name Validation ////////////////////
 // If last name does not match the name requirements.
 if(!lastName.match(nameFormat) ) {
 document.getElementById('errorlastName').innerHTML = 'Last Name may only contain letters and spaces.' + '</br>'; 
 // Sends back error advice to the HTML.
 document.regform.lastName.focus();
 // Focus on the erroneous field.
 return false;
 }
 // Clear the error advice.
 document.getElementById('errorlastName').innerHTML = '';
  // Email validation if email does not contain @ anywhere returns an alert.
  if (email.indexOf("@", 0) < 0) {
    document.getElementById('erroremail').innerHTML = 'The email address must contain a @ character using the xxx@xxx.xxx format.' + '</br>';
    return false;
    }
    
    document.getElementById('erroremail').innerHTML = '';
    // If the . is not present anywhere.
    if (email.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = 'The email address must contain a . character using the xxx@xxx.xxx format..' + '</br>';
         return false;
         }
         
         document.getElementById('erroremail').innerHTML = '';
         // If email address does not match the email format requirements.
         if(!email.match(emailFormat) ) {
         document.getElementById('erroremail').innerHTML = 'Invalid email format.' + '</br>'; 
         // Sends back error advice to the HTML.
         document.regform.email.focus(); 
         // Focus on the faulty field.
         return false;
         }
         
         document.getElementById('erroremail').innerHTML = '';
         // Phone Number Validation 
         if (!phoneNumber.match(isPhoneChar)) {
         document.getElementById('errorphoneNumber').innerHTML = 'The phone number may not contain letters or special characters.' + '</br>'; 
         // Sends back error advice to the HTML.
         return false;
         }

         document.getElementById('errorphoneNumber').innerHTML = '';
         // If phone number does not match the phone requirements.
         if(!phoneNumber.match(phoneFormat) ) {
         document.getElementById('errorphoneNumber').innerHTML = 'The phone number may only contain numbers entered in the (123) 456-7890 format.' + '</br>'; 
         // Sends back error advice to the HTML.
         document.regform.phoneNumber.focus(); 
         // Focus on the faulty field.
         return false;
         }

         document.getElementById('errorphoneNumber').innerHTML = '';
         // Newsletter Option Validation 
         // If either of the radio button is not clicked.

         if ( ( signUpNewsletter[0].checked == false ) && 
        ( signUpNewsletter[1].checked == false ) ) {
         document.getElementById('errorsignUpNewsletter').innerHTML = ' <<<<< Missing Newsletter Selection.'; 
         // Sends back error advice to the HTML.
         document.getElementById("Yes").focus(); 
         // Focus on the faulty field.
         return false;
         }

         // Clear the error advice.
         document.getElementById('errorsignUpNewsletter').innerHTML = '';
         // Collect the radio button choice.
         // Action taken if Yes is checked.
         if(document.getElementById('Yes').checked) {
         var signUpNewsletter = "Yes";
         }
         // Action taken if No is checked. 

         if(document.getElementById('No').checked) {
            var signUpNewsletter = "No";
            }
            //////////////////// Display Validation ////////////////////
            // Reset the invitation letters on each click.

            document.getElementById("regCon").innerHTML = "";
            // Displays the registration information.

            document.getElementById("regCon").innerHTML += '<article id="placeholderContent">' +
            'User ID: ' + '<span id="userID">' + userID + '</span>' +
            '<br/> User Password: ' + '<span id="passwordVerify">' + password + 
           '</span>' +
            '<br/> Verified Password: ' + '<span id="passwordVerify">' + 
           passwordVerify + '</span>' +
            '<br/> First Name: ' + '<span id="firstName">' + firstName + '</span>'
           +
            '<br/> Last Name: ' + '<span id="lastName">' + lastName + '</span>' +
            '<br/> Email Address: ' + '<span id="email">' + email + '</span>' +
            '<br/> Phone Number: ' + '<span id="phoneNumber">' + phoneNumber + 
           '</span>' +
            '<br/> News Letter Subscription: ' + '<span id="signUpNewsletter">' + 
           signUpNewsletter + '</span>' +
            '<br/>' +
            '</article> <br/><br/><br/>';
            return false;
           }
           // Load the validate() function on page load.
           window.onload = validate;
               
   




 