/**
  ---------=====- BACK TO TOP BUTTON -=====----------
  */
  let mybutton = document.getElementById("backTotop");
      
  window.onscroll = function() {scrollFunction()};
        
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
        
  function backTotopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  /**---------=====- END BACK TO TOP BUTTON -=====----------*/
  
  
   /**
    ---------=====- NAVBAR LINKS ACTIVE ON SCROLL -=====----------
    */
  const sections = document.querySelectorAll("section[id]");
  
  window.addEventListener("scroll", navHighlighter);
  
  function navHighlighter() {
  
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");
      
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  /**---------=====- END NAVBAR LINKS ACTIVE ON SCROLL -=====----------*/
  
  /**
  ---------=====- EASY SELECTOR HELPER FUNCTION -=====----------
  */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  /**---------=====- END EASY SELECTOR HELPER FUNCTION -=====----------*/
  
  /**
    ---------=====- EASY ON SCROLL EVENT LISTENER -=====----------
    */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  /**---------=====- END EASY ON SCROLL EVENT LISTENER -=====----------*/
  
  /**
    ---------=====- TOGGLE .header-scrolled to #header WHEN PAGE IS SCROLLED -=====----------
    */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
  /**---------=====- END TOGGLE .header-scrolled to #header WHEN PAGE IS SCROLLED -=====----------*/
  
  
  function navigateTo(target) {
    // Smooth scroll to the target section
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
  }
  