//Övning Random Dice


//En rom array 
let array = []; 

//Skapar en function som slumpar ut ett nr mellan 1-6 1000 gånger

function randomDice (){

    for (let i = 0; i < 1000; i++) {                    //En for-loop som säkerhetställer att det talen slumpas ut upp till 1000 ggr
        array.push((Math.floor(Math.random() * 6) +1)); //Objekten Math.floor (avrundar till närsta heltal) + Math.random (skriver ut talen slumpmässigt) 
    }
    return array;
}

//Skapar variabler för respektive nr
//Etablerar att datatypen är ett nr så utskriften inte blir NaN  

let nr1 = 0;
let nr2 = 0;
let nr3 = 0;
let nr4 = 0;
let nr5 = 0;
let nr6 = 0;

//Ny funktion som kallar på randomDice() 
//Print() beräknar hur många av varje siffra (1-6) som lagras i arrayen som används av randomDice()
//En loop- if else if. 

function print(){
    randomDice()

    for (let i in array) {              //if - sätter "counter" från 1, plusar på när funktionen kommer över datatypen med värdet 1          
        if (array[i] === 1) {           // === jämför två operander: jämför om talet finns i arrayen 
             nr1 += 1;
        } else if (array[i] === 2) {    //else if - "annars om", plusar på när funktionen kommer över datatypen med värdet två osv..
            nr2 += 1;          
        } else if (array[i] === 3) {
            nr3 += 1;
        } else if (array[i] === 4) {
            nr4 += 1;
        } else if (array[i] === 5) {
            nr5 += 1;
        } else if (array[i] === 6) {
            nr6 += 1;
        }
    }


    //Urskrift - sätter in en sting som berättar vad det är för siffra, följt av dess antal i nummer
    //Antalet lagras i respketive variabel
    //Skriver in \t för att hoppa in på sidan, samt \n för byta rad efter varje nr (snyggare)
    
    console.log("\t ettor: " + nr1 +  
                    "\n\t tvåor: " + nr2 + 
                    "\n\t treor: " + nr3 + 
                    "\n\t fyror: " + nr4 + 
                    "\n\t femor: " + nr5 +
                    "\n\t sexor: " + nr6);
}
print();
