function validateForm() {
    var emailInput = document.getElementById("formEmail").value;

    var firstAtIndex = emailInput.indexOf('@');
    var firstDotIndex = emailInput.indexOf('.');

    //improve this, currently doesn't support full stops in the email name
    if (firstAtIndex > 0 && firstDotIndex > firstAtIndex) {
        document.getElementById("emailFeedback").innerHTML = emailInput.toUpperCase();
    } else {
        document.getElementById("emailFeedback").innerHTML = "invalid email";
    }
}