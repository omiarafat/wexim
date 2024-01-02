


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
      
      
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
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
        window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navber").style.background = "#acacac";
        document.getElementById("navber").style.height = "70px";
        document.getElementById("navber").style.animation = "stickySlideDown 0.65s cubic-bezier(.23,1,.32,1) both";
      } else {
        document.getElementById("navber").style.background = "transparent";
        document.getElementById("navber").style.height = "90px";
        document.getElementById("navber").style.animation = "stickySlideUp 0.65s cubic-bezier(.23,1,.32,1) both";
      }
    }




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
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });