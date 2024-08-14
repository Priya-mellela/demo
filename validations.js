const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
  const email = emailInput.value.toLowerCase();
  const table = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];
  let emailExists = false;

  for (let i = 0; i < table.rows.length; i++) {
    const existingEmail = table.rows[i].cells[1].textContent.toLowerCase();
    if (email === existingEmail) {
      emailExists = true;
      break;
    }
  }
  if (emailExists) {
    emailError.textContent = "This email is already registered.";
    emailInput.setCustomValidity("Email already exists.");
  } else {
    emailError.textContent = "";
    emailInput.setCustomValidity("");
  }
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const state = document.getElementById("state").value;
    const table = document
      .getElementById("userTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const stateCell = newRow.insertCell(2);

    nameCell.textContent = name;
    emailCell.textContent = email;
    stateCell.textContent = state;

    document.getElementById("registrationForm").reset();
  });
