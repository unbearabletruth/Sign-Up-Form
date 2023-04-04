const input = document.getElementById("confirmpassword");
const form = document.querySelector("form");
const invalid = document.querySelector("input + span.error");

form.addEventListener("submit", (event) => {
    if (input.value != document.getElementById("password").value) {
        input.setCustomValidity("wrong");
        invalid.textContent = "Password Must be Matching";
        event.preventDefault();
    } else {
        input.setCustomValidity("");
    }
    }
  );