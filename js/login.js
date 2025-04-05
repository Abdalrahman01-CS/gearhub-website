// This function for login form validation

const error = document.querySelector("#error");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const form = document.querySelector("#loginForm");

form.addEventListener("submit", function (e) {
    let messages = [];
    if (username.value === '') {
        messages.push("Username is required");
    }

    if (password.value.length < 8 || password.value.length > 20) {
        messages.push("Password's length should be between 8 and 20");
    }

    if (messages.length > 0) {
        e.preventDefault();
        error.innerHTML = messages.join(" and ");
    }
});