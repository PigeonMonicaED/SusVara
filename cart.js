document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const sidebar = document.getElementById("cart-sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const overlay = document.getElementById("overlay");
  const header = document.querySelector(".header");

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.marginRight = "300px"; // Efek dorong
    header.classList.add("shifted"); // Geser header/navbar
  }

  function closeSidebarFn() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.marginRight = "0";
    header.classList.remove("shifted"); // Kembalikan posisi header/navbar
  }

  cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    openSidebar();
  });

  closeSidebar.addEventListener("click", closeSidebarFn);
  overlay.addEventListener("click", closeSidebarFn);
});


