document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu navbar mobile
  const menuToggle = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Menghilangkan menu saat kursor keluar dari area navbar
  navbar.addEventListener("mouseleave", function () {
    navbar.classList.remove("active");
  });

  // Sidebar Cart
  const cartIcon = document.getElementById("cart-icon");
  const sidebar = document.getElementById("cart-sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const overlay = document.getElementById("overlay");
  const header = document.querySelector(".header");

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.marginRight = "450px";
    header.classList.add("shifted");
  }

  function closeSidebarFn() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.marginRight = "0";
    header.classList.remove("shifted");
  }

  cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    openSidebar();
  });

  closeSidebar.addEventListener("click", closeSidebarFn);
  overlay.addEventListener("click", closeSidebarFn);
});
