  function saluer(nom) {

                return `Bonjour, ${nom}!`; 
            }

            
            console.log(saluer("nom"));

            function somme(a, b) {
  return a + b;
}

console.log(somme(5, 5));


const doubler = function(x) {
  return x * 2;
};

console.log(doubler(4));


const multiplier = (x) => x * 2;
console.log(multiplier(7));


function greet(nom = "invité") {
  console.log("Bonjour " + nom);
}

greet();
greet("sergeo");


function executer(fn) {
  fn();
}
executer(()=>{
  console.log("rappel execute !);
              });

function appliquer(fn, val) {
  return fn(val);
}

function factorielle(n){
  if(n===0) {
    return 1;
      }
    return n * factorielle(n - 1);
}
  console.log (factorielle(12));


  function test() {
  let x = 10;
  console.log("Dans la fonction:", x);
}

test();


function somme(a, b) {
  return a + b;
}

console.log("Pure:", somme(2, 3));
