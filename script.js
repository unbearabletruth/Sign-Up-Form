const input = document.getElementById("confirmpassword");
const buttoncheck = document.getElementsByTagName("button")[0];

function check() {
    if (input.value != document.getElementById("password").value) {
        input.setCustomValidity("Password Must be Matching.");
    } else {
        input.setCustomValidity('');
    }
}

buttoncheck.addEventListener("click", check);