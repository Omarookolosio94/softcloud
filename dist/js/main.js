//.querySelector(".footer-year").innerHTML = new Date().getFullYear();
var mobile_nav = document.getElementById("mobile-nav");
var htmlBody = document.getElementsByTagName("body")[0];

function toggleMobileNav(status) {
  if (!mobile_nav) return;

  if (status.toLowerCase() == "open") {
    mobile_nav.classList.add("open");
    htmlBody.classList.add("shadow");
  } else {
    mobile_nav.classList.remove("open");
    htmlBody.classList.remove("shadow");
  }
}
