(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-mobile");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });

  // tapping a link (or resizing back to desktop) shouldn't leave the
  // panel stuck open underneath the page
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) setOpen(false);
  });
})();
