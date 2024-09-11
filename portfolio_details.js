// JavaScript for handling modals and showing details
document.addEventListener("DOMContentLoaded", function () {
  // Function to show or hide details
  window.showDetails = function (icon) {
    let rootElement = icon.parentElement;
    let imgElement = icon.firstElementChild;
    let details=  rootElement.querySelector('.hidden-details');
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      imgElement.src = "./images/up-arrow.png"
    } else {
      details.style.display = "none";
      imgElement.src = "./images/down-arrow.png"
    }
  };
});
