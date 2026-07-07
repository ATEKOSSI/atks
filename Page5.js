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

    // ==========================================
    // 1. Récupération et synchronisation audio
    // ==========================================
    if (musique) {
        // Récupère la position venant de la page 4
        const positionSauvegardee = localStorage.getItem("positionMusique");
        if (positionSauvegardee) {
            musique.currentTime = parseFloat(positionSauvegardee);
        }

        // Tente de lancer la musique dès l'arrivée
        musique.play().catch(() => {
            console.log("Lecture en attente d'une interaction utilisateur.");
        });

        // Enregistre en continu si c'est la dernière page (ou pour sécurité)
        setInterval(() => {
            if (!musique.paused) {
                localStorage.setItem("positionMusique", musique.currentTime);
            }
        }, 500);
    }

    // ==========================================
    // 2. Étape 1 : clic pour ouvrir le cadeau
    // ==========================================
    if (boite) {
        boite.addEventListener("click", () => {
            // Transition cadeau → surprise
            cadeau.style.display = "none";
            intro.style.display = "none";
            surprise.style.display = "block";

            // Assure la lecture après l'action du clic si l'autoplay a été bloqué
            if (musique && musique.paused) {
                musique.play().catch((err) => {
                    console.error("Erreur de lecture audio :", err);
                });
            }

            // Lancer l'écriture du message
            typeWriter();
        });
    }

    // Effet machine à écrire
    function typeWriter() {
        if (i < texte.length) {
            message.textContent += texte.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }

});
