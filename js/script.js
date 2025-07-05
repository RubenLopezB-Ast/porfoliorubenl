document.addEventListener("DOMContentLoaded", function(){
    //Responsive
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu").querySelector("ul");
    toggle.addEventListener("click", ()=>{
        navMenu.classList.toggle("show");
    });
    //Cookies
    const popup = document.getElementById("cookie-popup");
    const botonAceptar =document.getElementById("aceptar-cookies");
    if(!localStorage.getItem("cookies-aceptadas")){
        popup.style.display="block";
    }
    botonAceptar.addEventListener("click",()=>{
        localStorage.setItem("cookies-aceptadas", "true");
        popup.style.display="none";
    });
});

// Botón "Volver arriba"
const btnVolverArriba = document.getElementById("btn-volver-arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnVolverArriba.style.display = "block";
  } else {
    btnVolverArriba.style.display = "none";
  }
});

btnVolverArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


