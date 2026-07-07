const texte = `Chaque belle histoire commence un jour...
Et la nôtre est devenue l'une des plus belles choses de ma vie ❤️.

Tout a commencé par un simple message,
un simple sourire,
un simple regard...

Je t'aime plus que tout mon amour ❤️.

Joyeux anniversaire Stéphane 🥰🎉

Je te souhaite beaucoup de bonheur, de santé,
de réussite et que tous tes rêves deviennent réalité. 🎂🎁❤️`;

let position = 0;
function ecrire(){
    if(position < texte.length){
        document.getElementById("texte").innerHTML += texte.charAt(position);
        position++;
        setTimeout(ecrire, 60);
    }
}
ecrire();

const liens = document.querySelectorAll("a");
liens.forEach(function(lien){
    lien.addEventListener("click", function(event){
        event.preventDefault();
        document.body.style.opacity = "0";
        const destination = this.href;
        setTimeout(function(){
            window.location.href = destination;
        }, 800);
    });
});

// ==========================================
// GESTION DE LA MUSIQUE (DÉMARRAGE INITIAL)
// ==========================================
const musique = document.getElementById("musique");

// Dès que l'utilisateur clique n'importe où sur la page 1, la musique se lance
window.addEventListener("click", function () {
    if (musique) {
        musique.play().then(() => {
            console.log("Musique lancée avec succès !");
            // On active la musique pour les pages suivantes
            localStorage.setItem("music", "play");
            
            // On enregistre sa position en continu toutes les 500ms
            setInterval(() => {
                localStorage.setItem("musique_position", musique.currentTime);
            }, 500);
        }).catch(err => {
            console.log("Lecture bloquée par le navigateur :", err);
        });
    }
}, { once: true }); // { once: true } garantit que cet écouteur ne s'exécute qu'une seule fois