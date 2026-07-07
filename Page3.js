// ===============================
// MUSIQUE
// ==============================


// ===============================
// APPARITION DES SOUVENIRS
// ===============================

const souvenirs = document.querySelectorAll(".souvenir");

function apparitionSouvenirs(){

    souvenirs.forEach(function(souvenir){

        const position = souvenir.getBoundingClientRect().top;

        const hauteurEcran = window.innerHeight;

        if(position < hauteurEcran - 100){

            souvenir.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", apparitionSouvenirs);

apparitionSouvenirs();


// ===============================
// PLUIE DE CŒURS
// ===============================

function creerCoeur(){

    const coeur = document.createElement("div");

    coeur.classList.add("coeur");

    coeur.innerHTML = "❤️";

    coeur.style.left = Math.random() * 100 + "%";

    coeur.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(coeur);

    setTimeout(function(){

        coeur.remove();

    },6000);

}
setInterval(creerCoeur,700);

// Assure-toi qu'il n'y a PAS d'autre "const musique" plus bas dans le fichier !
// Attend que la page HTML soit complètement chargée et prête
document.addEventListener("DOMContentLoaded", () => {
    
    const musique = document.getElementById("musique");

    // On vérifie si la musique doit être lancée
    if (musique && localStorage.getItem("music") === "play") {
        
        // 1. Récupération de la position
        const positionSauvegardee = localStorage.getItem("musique_position");
        if (positionSauvegardee) {
            musique.currentTime = parseFloat(positionSauvegardee);
        }

        // 2. Tentative de lecture automatique
        musique.play().catch(() => {
            // Sécurité en cas de blocage du navigateur (Autoplay restriction)
            window.addEventListener('click', () => {
                musique.play();
            }, { once: true });
        });

        // 3. Sauvegarde de la position en continu pour la page suivante
        setInterval(() => {
            if (!musique.paused) {
                localStorage.setItem("musique_position", musique.currentTime);
            }
        }, 500);
    }
});