document.addEventListener("DOMContentLoaded", function (event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    //var hamburgers = document.querySelectorAll(".hamburger");
    var hamburger = document.querySelector(".hamburger");

    var menuMobile = document.querySelector(".nav-primary-mobile");

    /*for (var i = 0; i < hamburgers.length; i++) {
        var hamburger = hamburgers[i];
        hamburger.addEventListener("click", openMenu);
    }*/
    hamburger.addEventListener("click", openMenu);


    function openMenu(evt) {
        evt.preventDefault();

        var cible = evt.currentTarget;

        if (cible.classList.contains("open")) {
            cible.classList.remove("open");
            menuMobile.classList.remove("open");
        } else {
            cible.classList.add("open");
            menuMobile.classList.add("open");
        }
    }
});