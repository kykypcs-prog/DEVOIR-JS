function estMajeur(age){
    if (age>=18){
     return true;
    } else{
        return false;
    }
}

console.log("estMajeur:",
    estMajeur(7))

 function noteTexte(note){
    if(note>=10){
      return "valide"
    } else{
        return "echec"
    }
 }
 console.log("noteTexte:",noteTexte(6));

 
 function maximun(a,b){
    if (a>b){
       return a;
    } else{
       return b
    }
 }
 console.log(maximun(34,24));


 function calculer(a,b,operation){
    if( operation==="+"){
       return a+b;
    }else if(operation==="-"){
      return   a-b;
    }else if(operation==="*"){
        return a*b;
    }else if (operation==="/"){
     if(b===0){
       return"erreur"
     }else{
        return a/b;
     }
      
    }

 }
  console.log(calculer(4,7,"/"));


  function triangle(a,b,c){
    if(a+b <= c || a+c<=b || b+c<=a){
       return  "impossible";
    } if (a===b && b===c){
        return "equilateral";
    } else if (a===b||a===c || b===c){
        return "isocele";
    }else if( a*a+b*b===c*c){
      return "rectangle";
    }else{
        return "quelconque";
    }
       
    }
       
    
  
console.log(triangle(4,3,5));



function mdpValide(mdp) {
    let contientChiffre = false;

    for (let i = 0; i < mdp.length; i++) {
        // Vérifie si le caractère est un chiffre
        if (!isNaN(mdp[i]) && mdp[i] !== " ") {
            contientChiffre = true;
        }
    }
    if (mdp.length >= 8 && contientChiffre) {
        return true;
    } else {
        return false;
    }
}

console.log("MotDePasseValide :", mdpValide("bonjoura"));



function mention(moyenne){
  if (moyenne < 10){
    return "recale";
  }else if (moyenne<=11){
    return "passable";
  }else if (moyenne<=13){
    return  "assez-bien";
  }else if (moyenne<=15){
    return "bien";
  } else{
    return "tres bien";
  }
}
  console.log( mention(14));
  // 8. AnnéeBissextile
function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log( estBissextile(2024)); 



function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

console.log( fizzBuzz(15));



function prixBillet(age, estEtudiant) {
    if (age < 12) {
        return "5€";
    } else if (age >= 65) {
        return "7€";
    } else if (age >= 12 && age <= 25 && estEtudiant === true) {
        return "6€";
    } else if (age >= 12 && age <= 25) {
        return "8€";
    } else {
        return "10€";
    }
}

console.log(  prixBillet(20, true)); 