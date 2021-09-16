

function validate() {
    "use strict";

    //declare variables
    var userName,
        password,
        passwordVerify,
        firstName,
        lastName,
        email,
        phoneNumber,
        userNameError = false,
        passwordError = false,
        passwordVerifyError = false, 
        firstNameError = false,
        lastNameError = false,
        emailError = false,
        phoneNumberError = false;

    //fill variables
    userName = document.getElementById('userName').value;
    password = document.getElementById('password').value;
    passwordVerify = document.getElementById('passwordVerify').value;
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    email = document.getElementById('email').value;
    phoneNumber = document.getElementById('phoneNumber').value;

    //clear all warning labels 
    document.getElementById('userNameWarning').innerHTML = "";
    document.getElementById('passwordWarning').innerHTML = "";
    document.getElementById('passwordVerifyWarning').innerHTML = "";
    document.getElementById('firstNameWarning').innerHTML = "";
    document.getElementById('lastNameWarning').innerHTML = "";
    document.getElementById('emailWarning').innerHTML = "";
    document.getElementById('phoneNumberWarning').innerHTML = "";

    //data verification Logic 
    // user name verification 
    var lettersNumbers = "^[0-9a-zA-Z]+$"; 
    var letters = "^[a-z A-Z]+$"; 
    var emailValues = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";
    var phoneValues = "^\(?([0-9]{3})\)?[-, ]?([0-9]{3})[-, ]?([0-9]{4})$";

    if (userName === "") {
        document.getElementById('userNameWarning').innerHTML = " *Please provide a username! ";
        userNameError = true; 
    }   else if (!userName.match(lettersNumbers)) {
        document.getElementById('userNameWarning').innerHTML = " *Please input alphanumeric characters only!";
        userNameError = true;
    }

    //password verification
    if (password ==="") {
        document.getElementById('passwordWarning').innerHTML = " *Please provide a Password! ";
        passwordError = true;
    }   else if (password.length < 8) {
        document.getElementById('passwordWarning').innerHTML = " *Password lenght must be 8 or more charcaters";
        passwordError = true;
    }

    //passwordVerify verification
    if (passwordVerify ==="") {
        document.getElementById('passwordVerifyWarning').innerHTML = " *Please provide a password";
        passwordVerifyError = true;
    }   else if (passwordVerify !== password) {
        document.getElementById('passwordVerifyWarning').innerHTML = " *Password must match!";
        passwordVerifyError = true;
    }

    //first name verification 
    if (firstName ==="") {
        document.getElementById('firstNameWarning').innerHTML = " *Please provide a first name! ";
        firstNameError = true;
    }   else if (!firstName.match(letters)) {
        document.getElementById('firstNameWarning').innerHTML = " *Field must be only characters! ";
        firstNameError = true;
    }

    //last name verification 
    if (lastName ===""){
        document.getElementById('lastNameWarning').innerHTML = " *Please provide a last name! ";
        lastNameError = true;
    }   else if (!lastName.match(letters)) {
        document.getElementById('lastNameWarning').innerHTML = " *Field must be only characters! ";
        lastNameError = true;
    }

    //email verification 
    if (email === ""){
        document.getElementById('emailWarning').innerHTML = " *Please provide an email! ";
        emailError = true;
    }   else if (emailValues.test(email) === false) {
        document.getElementById('emailWarning').innerHTML = " *Please input a valid email! ";
        emailError = true;
    }

    //phone number verification 
    if (phoneNumber ===""){
        document.getElementById('phoneNumberWarning').innerHTML = " *Please provide a phone number! ";
        phoneNumberError = true;
    }   else if (phoneValues.test(phoneNumber) === false){
        document.getElementById('phoneNumberWarning').innerHTML = " *Please input a valid phone number! ";
        phoneNumberError = true;
    }

    //set the cursor
    if (userNameError === true) {
        document.getElementById('userName').focus();
        return false;

    }   else if (passwordError === true) {
        document.getElementById('password').focus();
        return false;

    }   else if (passwordVerifyError === true) {
        document.getElementById('passwordVerify').focus();
        return false;

    }   else if (firstNameError === true) {
        document.getElementById('firstName').focus();
        return false;

    }   else if (lastNameError === true) {
        document.getElementById('lastName').focus();
        return false;

    }   else if (emailError === true) {
        document.getElementById('email').focus();
        return false;

    }   else if (phoneNumberError === true) {
        document.getElementById('phoneNumber').focus();
        return false;
    }

}

function GetPassedInParameters() {
    "use strict";

    //store values passed from form 1 into variables
    var userName = getUrlParameter('userName');
    var password = getUrlParameter('password');
    var passwordVerify = getUrlParameter('passwordVerify');
    var firstName = getUrlParameter('firstName');
    var lastName = getUrlParameter('lastName');
    var email = getUrlParameter('email');
    var phoneNumber = getUrlParameter('phoneNumber');
    var signUpNewsletter = getUrlParameter('signUpNewsletter');

    //Create cookies
    document.cookie = "userName" + userName + ";";
    document.cookie = "password" + password + ";";
    document.cookie = "passwordVerify" + passwordVerify + ";";
    document.cookie = "firstName" + firstName + ";";
    document.cookie = "lastName" + lastName + ";";
    document.cookie = "email" + email + ";";
    document.cookie = "phoneNumber" + phoneNumber + ";";
    document.cookie = "signUpNewsletter" + signUpNewsletter + ";";

    GetPassedInParametersFromCookie();
}

//function to parse data from urls
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));    
}

function GetPassedInParametersFromCookie() {

    //get cookie data
    var x = document.cookie;

    //display cookie data
    document.getElementById('node-id').innerHTML = x;
}







 
