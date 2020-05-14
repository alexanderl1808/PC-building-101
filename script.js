function changeCss () {

    const bodyElement = document.querySelector("body");
    const navElement = document.querySelector("nav");
    
    this.scrollY > 100 ? navElement.style.backgroundColor ="black" : navElement.style.backgroundColor = "transparent";
    navElement.style.transition ="0.5s ease";

  }
  
  window.addEventListener("scroll", changeCss);

