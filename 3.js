
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
  
        tablet: { smooth: true },
  
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  
  
  
  
  
  var h4all = document.querySelectorAll("#nav h4");
  h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      crsr.style.scale = 3;
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
      crsr.style.scale = 1;
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "#ccc";
    });
  });
  
  gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
  
  
  gsap.from("#page4 h1",{
    y:30,
    opacity:0,
    delay:0.5,
    duration:2,
    stagger:0.2
  })
  
  // gsap.to("#main", {
  //   backgroundColor: "#000",
  //   scrollTrigger: {
  //     trigger: "#main",
  //     scroller: "body",
  //     start: "top -25%",
  //     end: "top -70%",
  //     scrub: 2,
  //   },
  // });
  
  // Select the entire #page5 section and all images inside .sec-right
  const page5 = document.querySelector('#page5');
  const images = document.querySelectorAll('.sec-right img');
  
  // Add event listener to #page5 for 'mouseenter' and 'mouseleave'
  page5.addEventListener('mouseenter', () => {
    images.forEach((img) => {
      // Scale up the images when mouse enters #page5
      gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power1.inOut" });
    });
  });
  
  page5.addEventListener('mouseleave', () => {
    images.forEach((img) => {
      gsap.to(img, { scale: 1, duration: 0.5, ease: "power1.inOut" });
    });
  });
   
  // const page11 = document.querySelector(".accordion-item");
  // const img = document.querySelector(".right-column img[data-sec='b']");
  
  // page11.addEventListener("mouseenter", function() {
  //   gsap.to(img, { scale: 1, duration: 1, ease: "power1.inOut" });
  // });
  
  function animation(){
    const accordionItems = document.querySelectorAll(".accordion-item");
    const images = document.querySelectorAll(".right-column img");
    
    accordionItems.forEach((item, index) => {
      item.addEventListener("mouseenter", function() {
        gsap.to(images[index], { scale: 1.1, duration: 0.8, ease: "power1.inOut" });
      });
    
      item.addEventListener("mouseleave", function() {
        gsap.to(images[index], { scale: 1, duration: 0.8, ease: "power1.inOut" });
      });
    });
  }
  
  animation();
  
  window.addEventListener('scroll', () => {
    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach((benefit) => {
        const rect = benefit.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            benefit.classList.add('active');
        }
    });
  });
  
  window.addEventListener('scroll', () => {
    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach((benefit) => {
        const rect = benefit.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            benefit.classList.add('active');
        }
    });
  });
  
  
  
  window.addEventListener('scroll', () => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        const rect = tile.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            tile.classList.add('active');
        }
    });
  });
  
  // locomotiveAnimation();
  
  
  // function showSidebar() {
  //   const sidebar = document.querySelector('.sidebar');
  //   sidebar.style.display = 'flex';  // Shows the sidebar
  // }
  
  // function hideSidebar() {
  //   const sidebar = document.querySelector('.sidebar');
  //   sidebar.style.display = 'none';  // Hides the sidebar
  // }
  
  
//   function openMenu() {
//     const mobileNav = document.getElementById('mobile-nav');
//     mobileNav.classList.add('open');
//   }
  
//   function closeMenu() {
//     const mobileNav = document.getElementById('mobile-nav');
//     mobileNav.classList.remove('open');
//   }
  
//   function openMenu() {
//     document.getElementById('mobile-nav').classList.add('active');
//   }
  
//   function closeMenu() {
//     document.getElementById('mobile-nav').classList.remove('active');
//   }
  


//   function showSidebar() {


//     const sidebar = document.querySelector('.sidebar');
//     sidebar.addEventListener("mouseenter",function(){
//         sidebar.style.display = 'flex';  
//     })
//     sidebar.addEventListener("mouseleave",function(){
//         sidebar.style.display = 'none';  
//     })

//   }
//   hideSidebar();

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
  }

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  