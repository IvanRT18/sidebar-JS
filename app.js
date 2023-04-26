const sideButton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-btn");

sideButton.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
