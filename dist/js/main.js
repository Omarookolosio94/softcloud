document.querySelector(".footer-year").innerHTML = new Date().getFullYear();

//.querySelector(".footer-year").innerHTML = new Date().getFullYear();
var mobile_nav = document.getElementById("mobile-nav");
var htmlBody = document.getElementsByTagName("body")[0];

function toggleMobileNav(status) {
  if (!mobile_nav) return;

  if (status.toLowerCase() == "open") {
    mobile_nav.classList.remove("close");
    mobile_nav.classList.add("open");
    htmlBody.classList.add("shadow");
  } else {
    mobile_nav.classList.remove("open");
    mobile_nav.classList.add("close");
    htmlBody.classList.remove("shadow");
  }
}

$(".project-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
  ],
});
