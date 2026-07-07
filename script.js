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

    coeur.style.left = Math.random()*100 + "%";

    zone.appendChild(coeur);

    setTimeout(function(){

        coeur.remove();

    },5000);
}

setInterval(creerCoeur,500);

const bouton = document.getElementById("commencer");
const musique = document.getElementById("musique");

bouton.addEventListener("click", function () {

    musique.play();

});
// 1. Sélection des éléments HTML
const boutonCommencer = document.getElementById('commencer');
const maMusique = document.getElementById('musique');

// 2. Écoute du clic sur le bouton
boutonCommencer.addEventListener('click', function(event) {
    // Optionnel : Empêche la redirection immédiate si vous voulez d'abord lancer la musique
    // event.preventDefault(); 
    
    // 3. Lecture de l'audio
    maMusique.play()
        .then(() => {
            console.log("La musique a démarré avec succès !");
        })
        .catch(error => {
            console.error("Erreur lors de la lecture de la musique :", error);
        });
});
