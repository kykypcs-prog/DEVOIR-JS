function inclut(texte,mot){
 return texte.includes(mot);
}
console.log(inclut("bonjour","jour"));



function remplacerMot(phrase,ancienMot,nouveauMot){
    return phrase.replace(ancienMot, nouveauMot);
}
console.log(remplacerMot("le chat dort ", "chat","chien"))


function diviserChaine(texte) {
    return texte.split(",");
}
console.log(diviserChaine("a,b,C"));

function supprimerEspaces(texte) {
    return texte.trim();
}
console.log(supprimerEspaces(" Hello ")); 


function inverserChaine(texte) {
    return texte.split("").reverse().join("");
}
console.log(inverserChaine("abc"));

function validerEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(validerEmail("user@example.com"));


function masquerNumero(numero) {
    return "****-****-****-" + numero.slice(-4);
}
console.log(masquerNumero("1234-5678-9012-3456"));

function extraireNomEmail(email) {
    return email.split("@")[0];
}
console.log(extraireNomEmail("jojo@example.com"));

    

    function compterA(texte) {
    return texte.split("a").length - 1;
}
console.log(compterA("banana"));



function estPalindrome(mot) {
    let inverse = mot.split("").reverse().join("");
    return mot === inverse;
}
console.log(estPalindrome("madam"))

function convertirSlug(titre) {
    return titre
        .toLowerCase()
        .replace(/'/g, "-")
        .replace(/\s+/g, "-");
}
console.log(convertirSlug("Titre de l'article"))


function encoderURL(url) {
    return encodeURI(url);
}
console.log(encoderURL("https://example.com/search?q=éàç"));


function capitaliserTexte(texte) {
    return texte
        .split(" ")
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(" ");
}
console.log(capitaliserTexte("hello world"))


function motLePlusLong(phrase) {
    let mots = phrase.split(" ");
    return mots.reduce((a, b) => a.length > b.length ? a : b);
}
console.log(motLePlusLong("Le chat dort profondément"))

function analyserChaine(texte) {
    let lettres = (texte.match(/[a-zA-Z]/g) || []).length;
    let chiffres = (texte.match(/[0-9]/g) || []).length;
    let symboles = (texte.match(/[^a-zA-Z0-9]/g) || []).length;

    return {
        lettres: lettres,
        chiffres: chiffres,
        symboles: symboles
    };
}
console.log(analyserChaine("Hello123!@"));


function genererMotDePasse() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let motDePasse = "";

    for (let i = 0; i < 8; i++) {
        motDePasse += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
    }

    return motDePasse;
}
console.log(genererMotDePasse());

function extraireExtension(fichier) {
    return fichier.split(".").pop();
}
console.log(extraireExtension("fichier.pdf"));


function verifierDomaine(domaine) {
    let regex = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return regex.test(domaine);
}
console.log(verifierDomaine("example.com"));


function trouverHashtags(texte) {
    return texte.match(/#\w+/g);
}
console.log(trouverHashtags("#JS #WebDev"));


function formaterNombre(nombre) {
    return nombre.toLocaleString("fr-FR");
}
console.log(formaterNombre(1234.45));