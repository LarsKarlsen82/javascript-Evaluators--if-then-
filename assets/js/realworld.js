
/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */


/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const myAnswerForm = document.querySelector(".assignmentArea form");
  const myAnswerInput = document.getElementById("answerOne");
  const myAnswerButton = document.getElementById("answerButton");
  const myAnswerFeedbackElement = document.getElementById("answerFeedback");

  myAnswerForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting

      validate();
  });

 /* function validate() {
      const selectedAnswer = myAnswerInput.value;
      if (selectedAnswer === "true") {
          myAnswerFeedbackElement.innerHTML = "Korrekt svar!";
      } else {
          myAnswerFeedbackElement.innerHTML = "Forkert svar. Prøv igen!";
      }
  }
});
*/

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/
function validate() {
  const selectedAnswer = myAnswerInput.value;
  if (selectedAnswer === "true" || selectedAnswer === "ja i disney film") {
      myAnswerFeedbackElement.innerHTML = "Korrekt svar!";
  } else {
      myAnswerFeedbackElement.innerHTML = "Forkert svar. Prøv igen!";
  }
}
});



/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/
    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function () {
      const myForm = document.querySelector(".assignmentForm form");
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



/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
