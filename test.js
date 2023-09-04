    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function () {
        const myForm = document.querySelector(".assignmentArea form");
        const myNameInput = document.getElementById("myName");
        const myEmailInput = document.getElementById("myEmail");
        const myAgeInput = document.getElementById("myAge");
        const submitButton = document.getElementById("submitButton");
        const formValideringResult = document.getElementById("formValideringResult");

        myForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the form from submitting

            validateForm();
        });

        function validateForm() {
            const name = myNameInput.value.trim();
            const email = myEmailInput.value.trim();
            const age = myAgeInput.value.trim();

            if (name === "") {
                formValideringResult.innerHTML = "Navn skal udfyldes.";
                return;
            }

            if (email === "") {
                formValideringResult.innerHTML = "Email skal udfyldes.";
                return;
            }

            if (!isValidEmail(email)) {
                formValideringResult.innerHTML = "Email er ikke gyldig.";
                return;
            }

            if (age === "") {
                formValideringResult.innerHTML = "Alder skal udfyldes.";
                return;
            }

            if (!isValidAge(age)) {
                formValideringResult.innerHTML = "Alder skal være et positivt tal.";
                return;
            }

            // If all validations pass, the form is considered valid.
            formValideringResult.innerHTML = "Formularen er gyldig.";
        }

        function isValidEmail(email) {
            // You can use a regular expression to validate email format
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailRegex.test(email);
        }

        function isValidAge(age) {
            // Check if age is a positive integer
            return !isNaN(age) && parseInt(age) > 0;
        }
    });