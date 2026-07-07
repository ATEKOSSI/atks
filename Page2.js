// ===========================
// Récupération des éléments
// ===========================

const enveloppe = document.getElementById("enveloppe");
const lettre = document.getElementById("lettre");
const zoneTexte = document.getElementById("texte");

// ===========================
// Message de la lettre
// ===========================

const message = `Mon amour ❤️,

Avant de continuer cette petite aventure,
je voulais simplement te dire merci.

Merci d'être entré dans ma vie.
Merci pour tous les moments que nous partageons.

Aujourd'hui est un jour très spécial,
et j'espère que cette surprise te fera sourire.

Ce n'est que le début...
Le plus beau reste encore à découvrir. ❤️`;

// ===========================
// Animation d'écriture
// ===========================

let position = 0;

function ecrireTexte() {

    if (position < message.length) {

        zoneTexte.innerHTML += message.charAt(position);

        position++;

        setTimeout(ecrireTexte, 50);

    }

}

// ===========================
// Ouverture de l'enveloppe
// ===========================

enveloppe.addEventListener("click", function () {

    // Faire disparaître l'enveloppe
    enveloppe.style.display = "none";

    // Afficher la lettre
    lettre.style.display = "block";

    // Commencer à écrire
    ecrireTexte();

});
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
