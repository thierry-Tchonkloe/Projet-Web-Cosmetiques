const wrapper=document.querySelector('.wrapper');
const registerLink=document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');

registerLink.onclick=()=>{
    wrapper.classList.add('active');
}

loginLink.onclick=()=>{
    wrapper.classList.remove('active');
}

function admin_login_Form() {
    let form = document.getElementById("admin_login");
    let formData = new FormData(form);

    fetch("http://127.0.0.1:8000/admin/login", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.my_message);
        // Traitez la réponse du backend ici (par exemple, affichez un message de succès)

        let alerter=alert(data.my_message);
        if(alerter){
            document.location.href="../accueil.html";
        }
        else{
            document.location.href="login_register.html";
        }
    })
    .catch(error => console.error("Erreur lors de l'envoi du formulaire:", error));
}


function admin_register_Form() {
    let form = document.getElementById("admin_register");
    let formData = new FormData(form);

    fetch("http://127.0.0.1:8000/admin/rgister", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.my_message);
        // Traitez la réponse du backend ici (par exemple, affichez un message de succès)

        let alerter=alert(data.my_message);
        if(alerter){
            document.location.href="../accueil.html";
        }
        else{
            document.location.href="login_register.html";
        }
    })
    .catch(error => console.error("Erreur lors de l'envoi du formulaire:", error));
}