function contact_Form() {
    let form = document.getElementById("mycontact");
    let formData = new FormData(form);

    fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.my_message);
        // Traitez la réponse du backend ici (par exemple, affichez un message de succès)
        // let alerter=alert(data.my_message);
        // if(alerter){
        //     document.location.href="../accueil.html";
        // }
        // else{
        //     document.location.href="contact.html";
        // }
    })
    .catch(error => console.error("Erreur lors de l'envoi du formulaire:", error));
}