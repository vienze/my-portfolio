// NAVBAR CHANGE ICON TOGGLER MENU
const iconTogglerMenu = document.querySelector(".navbar-toggler .bi");

if (iconTogglerMenu) {
  iconTogglerMenu.addEventListener("click", () => {
    iconTogglerMenu.classList.toggle("bi-x");
  });
}

// FILTER CARD BUTTON
const filterButton = document.querySelectorAll(".filter-button button");
const filterCard = document.querySelectorAll(".filter-card .data-card");

const filterableCard = (e) => {
  const activeElement = document.querySelector(".actived");
  if (activeElement) {
    activeElement.classList.remove("actived");
  }

  e.target.classList.add("actived");

  filterCard.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.category === e.target.dataset.category ||
      e.target.dataset.category === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterButton.forEach((button) => {
  button.addEventListener("click", filterableCard);
});

// CONTACT VALIDATION & REDIRECT
const nameUser = document.querySelector("#nameUser");
const nameHelp = document.querySelector("#nameHelp");
const emailUser = document.querySelector("#emailUser");
const emailHelp = document.querySelector("#emailHelp");
const messageUser = document.querySelector("#messageUser");
const messageHelp = document.querySelector("#messageHelp");

// FUNCTION ALERT TEXT FORM
const alertText = (params, message = "") => {
  params.innerText = message;
  params.classList.add("text-danger");
};

const emailValidation = () => {
  let emailValid = true;
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!emailUser.value.match(pattern)) {
    alertText(emailHelp, "Please enter a valid email");
    emailValid = false;
  } else {
    alertText(emailHelp);
  }

  return emailValid;
};

const inputValidation = () => {
  let isValid = true;

  if (nameUser.value === "") {
    alertText(nameHelp, "Name is required!");
    isValid = false;
  } else {
    alertText(nameHelp);
  }

  if (emailUser.value === "") {
    alertText(emailHelp, "Email is required!");
    isValid = false;
  } else {
    alertText(emailHelp);
  }

  if (messageUser.value === "") {
    alertText(messageHelp, "Message is required!");
    isValid = false;
  } else {
    alertText(messageHelp);
  }

  return isValid;
};

const resetForm = () => {
  nameUser.value = "";
  emailUser.value = "";
  messageUser.value = "";
};

// FUNCTION SUBMIT FORM
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyQnpRSwpMvGeyIgVMDZcJ1Eb2ZooE6iTp0bXD5nOjJSwu9TVUJRAp1Oc07N39SZ_K4/exec";
const form = document.forms["vienze-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const alertContact = document.querySelector(".alert-contact");

// btnSend.classList.toggle("d-none");
// btnLoading.classList.toggle("d-none");

// email validation
emailUser.addEventListener("keyup", emailValidation);
// form submit
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.addEventListener("keyup", () => {
      inputValidation();
      emailValidation();
    });

    if (inputValidation() && emailValidation()) {
      btnSend.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
        (response) => {
          btnSend.classList.toggle("d-none");
          btnLoading.classList.toggle("d-none");
          alertContact.classList.toggle("d-none");
          setTimeout(() => {
            alertContact.classList.toggle("d-none");
          }, 5000);
          resetForm();
        }
      );
    }
  });
}

// BOOTSTRAP JAVASCRIPT
// ENABLE TOOLTIPS
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
