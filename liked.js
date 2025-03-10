document.addEventListener("DOMContentLoaded", function () {
    const loveIcons = document.querySelectorAll(".love-icon i");
  
    loveIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        this.classList.toggle("fas");
        this.classList.toggle("far");
        this.classList.toggle("liked");
      });
    });
  });
  