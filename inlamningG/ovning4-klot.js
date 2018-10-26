// En funktion som räknar ut volymen och arean i en sfär m hjälp av objektet Math.pow

function mittKlot(radie){
    let volym = (4 * Math.PI * Math.pow(radie, 3))/3;
    let area = 4 * Math.PI * Math.pow(radie, 2);

 
//Skapar en array där jag placerar in variablerna för volym och area - funktionen returnerar sedan dessa. 

    let storlekar = [volym.toFixed(2), area.toFixed(2)]; 
    return storlekar
 }

// Variabel som kör funktionen med ett värde, i detta fall värdet 8
 let klotet = mittKlot(8);
  
//Utskrift som hämtar resultatet av funktionerna och formaterar om texten på ett snyggt sätt

 console.log(`Volymen på sfären är + ${klotet[0]} cm3 och dess area är ${klotet[1]} cm2`);



















