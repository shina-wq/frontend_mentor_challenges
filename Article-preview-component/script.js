document.addEventListener("DOMContentLoaded", function () {
    const shareBtn = document.querySelector(".share-btn");
    const shareContainer = document.querySelector(".share-container");
    const sharePopup = document.querySelector(".share-popup");
  
    // Toggle share popup when button is clicked
    shareBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      shareContainer.classList.toggle("active");
    });
  
    // Close the popup when clicking outside
    document.addEventListener("click", function (e) {
      if (!shareContainer.contains(e.target)) {
        shareContainer.classList.remove("active");
      }
    });
  });
  