const message = "J'ai préparé quelque chose de très spécial pour toi... ❤️   J'espère que tu as le coeur bien accroché😅 à cette surprise";
let i = 0;

function ecrireTexte() {
    if (i < message.length) {
        document.getElementById("texte").innerHTML += message.charAt(i);
        i++;
        setTimeout(ecrireTexte, 80);
    }
}
ecrireTexte();

function creerCoeur() {
    const zone = document.getElementById("coeurs");
    if (!zone) return;
    const coeur = document.createElement("div");
    coeur.classList.add("coeur");
    coeur.innerHTML = "❤️";
    coeur.style.left = Math.random() * 100 + "%";
    zone.appendChild(coeur);
    setTimeout(function(){
        coeur.remove();
    }, 5000);
}
setInterval(creerCoeur, 500);

// --- MODIFICATION ICI POUR LA MUSIQUE ---

const boutonCommencer = document.getElementById('commencer');
const maMusique = document.getElementById('musique');

if (boutonCommencer && maMusique) {
    boutonCommencer.addEventListener('click', function(event) {
        // 1. Sauvegarde la position actuelle de la musique avant de changer de page
        localStorage.setItem('positionMusique', maMusique.currentTime);
        
        // 2. Lance la musique
        maMusique.play()
            .then(() => {
                console.log("La musique a démarré avec succès !");
            })
            .catch(error => {
                console.error("Erreur lors de la lecture de la musique :", error);
            });
    });
}
