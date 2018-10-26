
//Räkna ut hypotenusan i en triangel

//Skapar två variabler för triangelns två rätvinkliga sidor
let sida1 = 6;
let sida2 = 5;


//Skapar en funktion som räknar ut hypotenusan med hjälp av objekten Math.pow & Math.sqrt

function pyth(a, b){
   let c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(c);
}

//Utskrift - resultat av funktionen som skapats
console.log(pyth(sida1, sida2));


