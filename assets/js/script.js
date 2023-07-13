// NAVBAR CHANGE ICON TOGGLER MENU
const iconTogglerMenu = document.querySelector(".navbar-toggler .bi");

iconTogglerMenu.addEventListener("click", () => {
  iconTogglerMenu.classList.toggle("bi-x");
});

//FILTER CARD BUTTON
const filterButton = document.querySelectorAll(".filter-button button");
const filterCard = document.querySelectorAll(".filter-card .data-card");

const filterableCard = (e) => {
  document.querySelector(".activefd").classList.remove("actigved");
  e.target.classList.add("acbtived");
  console.log(e.target.dataset.category);

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
