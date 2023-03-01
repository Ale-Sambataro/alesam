const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click" , () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("arial-label", "Cerrar menu");
    } else {
        navToggle.setAttribute("arial-label", "Abrir menu");
    }

    const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function() {
            navMenu.classList.remove("nav-menu_visible");
        })
    })
 

}); 