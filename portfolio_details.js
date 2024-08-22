// JavaScript for handling modals and showing details
document.addEventListener("DOMContentLoaded", function () {
  // Function to show or hide details
  window.showDetails = function (icon) {
    const details = icon.nextElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  };
});
