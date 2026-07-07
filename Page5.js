document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const cadeau = document.getElementById("cadeau");
    const surprise = document.getElementById("surprise");
    const boite = document.getElementById("boite");
    const message = document.getElementById("message");
    const musique = document.getElementById("musique");

    // Texte à écrire progressivement
    const texte = "Je te souhaite un bonheur immense, rempli d'amour, de paix et de sourires chaque jour ❤️";
    let i = 0;

    // Étape 1 : clic pour ouvrir le cadeau
    boite.addEventListener("click", () => {

        // Transition cadeau → surprise
        cadeau.style.display = "none";
        intro.style.display = "none";
        surprise.style.display = "block";

        // Lancer musique (obligatoirement après interaction utilisateur)
        musique.play().catch(() => {
            console.log("Lecture audio bloquée par le navigateur");
        });

        // Lancer écriture du message
        typeWriter();
    });

    // Effet machine à écrire
    function typeWriter() {
        if (i < texte.length) {
            message.textContent += texte.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }

});

// Page4.js et Page5.js
// Assure-toi qu'il n'y a PAS d'autre "const musique" plus bas dans le fichier !
const musique = document.getElementById("musique");

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