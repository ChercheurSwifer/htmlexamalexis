function myFunction() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

let form_inscription = document.getElementById("inscription");
let champ_pseudo = form_inscription.elements["pseudo"];
let champ_email = form_inscription.elements["mail"];
let champ_password = form_inscription.elements["password"];
let champ_cfpassword = form_inscription.elements["popox"];
let btn = document.getElementById("valider");

function valider (event) 
{
    if(champ_pseudo && champ_email && champ_password && champ_cfpassword !== ''){
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }

    if(champ_pseudo.value == '')
    {
        let abo = document.querySelector('#abo');
        abo.innerHTML = `Pseudo Manquant `
        alert("Mettez un pseudo !");
    }

    if (champ_email.value == '')
    {
        let aba = document.querySelector('#aba');
        aba.innerHTML = `Email manquant `
        alert("Mettez un email !");
    }

    if (champ_password.value == '')
    {
        let abu = document.querySelector('#abu');
        abu.innerHTML = `Mot de passe manquant `
        alert("Mettez un mot de passe !");
    }

    if (champ_cfpassword.value == '')
    {
        let abz = document.querySelector('#abz');
        abz.innerHTML = `Confirmation du mot de passe manquant `
        alert("confirmé votre mdp !");
    }

    if (champ_password.value != champ_cfpassword.value)
    {
        alert("les mots de passe ne correspondent pas !");
        let xxx = document.querySelector('#xxx');
        xxx.innerHTML = `les mots de passe ne correspondent pas ! `
    }

    let regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
    if (regex.exec(champ_email.value) == null) 
    {
        form_OK = false;
    }

}
form_inscription.addEventListener('submit', valider);
console.log("infos" +champ_pseudo+ "" +champ_email+ "" +champ_password);