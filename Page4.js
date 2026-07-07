// ==============================
// MUSIQUE
// ==============================

const musique = document.getElementById("musique");

document.addEventListener("click", function () {

    musique.play();

}, { once: true });


// ==============================
// APPARITION DES CARTES
// ==============================

const cartes = document.querySelectorAll(".raison");

function afficherCartes() {

    cartes.forEach(function (carte) {

        const position = carte.getBoundingClientRect().top;

        const hauteur = window.innerHeight;

        if (position < hauteur - 100) {

            carte.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", afficherCartes);

afficherCartes();


// ==============================
// PLUIE DE CŒURS
// ==============================

function creerCoeur() {

    const coeur = document.createElement("div");

    coeur.classList.add("coeur");

    coeur.innerHTML = "❤️";

    coeur.style.left = Math.random() * 100 + "%";

    coeur.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(coeur);

    setTimeout(function () {

        coeur.remove();

    }, 6000);

}

setInterval(creerCoeur, 1000);


// ==============================
// TRANSITION ENTRE LES PAGES
// ==============================

const bouton = document.querySelector(".btn");

bouton.addEventListener("click", function (event) {

    event.preventDefault();

    document.body.style.opacity = "0";

    const destination = this.href;

    setTimeout(function () {

        window.location.href = destination;

    }, 800);

});

// Page4.js et Page5.js
// Assure-toi qu'il n'y a PAS d'autre "const musique" plus bas dans le fichier !

if (localStorage.getItem("music") === "play") {
    // 1. On récupère la position de la page précédente
    const positionSauvegardee = localStorage.getItem("musique_position");
    if (positionSauvegardee) {
        musique.currentTime = parseFloat(positionSauvegardee);
    }

    // 2. On relance la musique
    musique.play().catch(() => {
        // Sécurité : si le navigateur bloque, on attend un clic sur cette nouvelle page
        window.addEventListener('click', () => {
            musique.play();
        }, { once: true });
    });

    // 3. On continue d'enregistrer la position pour la page d'après
    setInterval(() => {
        if (!musique.paused) {
            localStorage.setItem("musique_position", musique.currentTime);
        }
    }, 500);
}