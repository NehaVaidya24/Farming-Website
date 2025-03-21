  //navbar scroll effect
  window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar-header");

    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Ensure Owl Carousel runs correctly
  $(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 800, // Ensures smooth sliding
      responsive: {
        0: { items: 1 },  // 1 item on small screens
        768: { items: 2 }, // 1 item on tablets
        1024: { items: 2 } // Ensure only 1 item shows at a time
      }
    });
  });
  
  /*==================================Small Screen Navbar (768)===========================*/
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".site-navbar ul");
  const closeMenu = document.getElementById("closeMenu");

  //Open menu
  hamburger.addEventListener("click", function(){
    navMenu.classList.add("active");
    hamburger.style.display = "none";
    closeMenu.style.display = "block";  //show close icon
  })

  closeMenu.addEventListener("click", function() {
    navMenu.classList.remove("active");
    hamburger.style.display = "block";
    closeMenu.style.display = "none";  //hide close icon
  })