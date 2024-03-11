function signup_Form() {
    let form = document.getElementById("mysignup");
    let formData = new FormData(form);

    fetch("http://127.0.0.1:8000/connexion/register", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Traitez la réponse du backend ici (par exemple, affichez un message de succès)
        alert('vous êtes bien enregistré');

        document.location.href="../accueil.html";
    })
    .catch(error => console.error("Erreur lors de l'envoi du formulaire:", error));
}


function sign_in_Form() {
    let form = document.getElementById("mysignin");
    let formData = new FormData(form);

    fetch("http://127.0.0.1:8000/connexion/login", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Traitez la réponse du backend ici (par exemple, affichez un message de succès)
        alert('vous êtes bien connecté');
        document.location.href="../accueil.html";
    })
    .catch(error => console.error("Erreur lors de l'envoi du formulaire:", error));
}


function forget_Form() {
    let form = document.getElementById("myforget");
    let formData = new FormData(form);

    fetch("http://127.0.0.1:8000/connexion/forget", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Traitez la réponse du backend ici (par exemple, affichez un message de succès)
        alert('vous pouvez incrire le code envoyer à votre Email pour changer votre mot de passe');
        document.location.href="../accueil.html";
    })
    .catch(error => console.error("Erreur lors de l'envoi du formulaire:", error));
}