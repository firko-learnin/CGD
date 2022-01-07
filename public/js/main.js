//Set url to current site
const url = window.location.origin;
const managementLink = document.getElementById("logo");
managementLink.addEventListener("click", handleClick);

function handleClick() {
  window.location.href = "./management.html";
}
