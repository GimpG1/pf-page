// JavaScript for handling modals and showing details
document.addEventListener("DOMContentLoaded", function () {
  // Function to show or hide details
  window.showDetails = function (icon) {
    const details = icon.nextElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      icon.style.color = "#ff0000"; // Change icon color when active
    } else {
      details.style.display = "none";
      icon.style.color = "#4CAF50"; // Revert icon color
    }
  };
});
