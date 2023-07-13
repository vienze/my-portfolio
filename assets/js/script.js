// NAVBAR CHANGE ICON TOGGLER MENU
const iconTogglerMenu = document.querySelector(".navbar-toggler .bi");

iconTogglerMenu.addEventListener("click", () => {
  iconTogglerMenu.classList.toggle("bi-x");
});

//FILTER CARD BUTTON
const filterButton = document.querySelectorAll(".filter-button button");
const filterCard = document.querySelectorAll(".filter-card .data-card");

const filterableCard = (e) => {
  document.querySelector(".actived").classList.remove("actived");
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
const sendContact = document.querySelector("#sendContact");

const maxLength = {
  name: 30,
  email: 100,
};

const messageEmail = `
mailto:mynameisherudin@gmail.com?subject=Message%20From%20%2D%20&${nameUser.value}body=${messageUser.value}
`;

// FUNCTION ALERT TEXT FORM
const alertText = (params, color, message) => {
  params.innerText = message.value;
  params.classList.add(color);
  const setAlert = setTimeout(() => {
    params.innerText = null;
  }, 4000);
};

// FUNCTION MAX TEXT FORM
const maxLengthText = (params, nameMax, listMax) => {
  const remainingText = params.length - maxLength.listMax;
  //SET COLOR TEXT
  params.classList.add("text-primary");
  if (!params.length <= maxLength.listMax) {
    params.classList.add("text-danger");
  }

  params.innerText = `Remaining text ${remainingText}`;
};

const validation = () => {
  // Message Empty
  nameUser === ""
    ? alertText(nameHelp, "text-danger", "Name is required")
    : maxLengthText(nameUser, nameHelp, name);
};
validation();

nameUser.addEventListener("keyup", () => {
  nameHelp.innerText = nameUser.value;
});

// BOOTSTRAP JAVASCRIPT
// ENABLE TOOLTIPS
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
