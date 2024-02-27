

    // <--------navbar-------->

    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
        // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      
      // Get current scroll position
      let scrollY = window.pageYOffset;
      
      // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        
        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ){
          document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
      });
    }
  let sidebar = document.querySelector('.mobmenu');
  let sidebarTrigger = document.querySelector('.sidemenu-btn');
  let overlay = document.querySelector('.body-overlay');
  let closbtn = document.querySelector('.clos-btn');
  let navlink = document.querySelector('.nav-link');

  sidebarTrigger.addEventListener('click', function () {

      sidebar.classList.add('open-menu');
      overlay.classList.add('show');
  });

  closbtn.addEventListener('click', function () {

      sidebarTrigger.classList.remove('open-menu');
      sidebar.classList.remove('open-menu');
      overlay.classList.remove('show');
  });

  overlay.addEventListener('click', function () {

      sidebarTrigger.classList.remove('open-menu');
      sidebar.classList.remove('open-menu');
      overlay.classList.remove('show');
  });
    // <--------navbar end-------->

    var swiper = new Swiper(".laptopSwiper", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });



    var swiper = new Swiper(".teamSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        809: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
    },
    });


    var swiper = new Swiper(".testimonialSlide", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    

    // count js
    $(document).ready(function() {

      var counters = $(".count");
      var countersQuantity = counters.length;
      var counter = [];
    
      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }
    
      var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, 0.2);
      }
    
      for (j = 0; j < countersQuantity; j++) {
        count(25, counter[j], j);
      }
    });
    // count js end


