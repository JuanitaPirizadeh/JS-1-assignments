

//Skapar objektet Person m hjälp av konstruktor
function Person(namn, email, mobil){ 
    this.namn = namn;
    this.email = email;
    this.mobil =  mobil;
    this.adress = [];  //En tom array
    
}
// Skapar objektet Adress m hjälp av konstruktor
function Address(gatuadress, postnummer, ort) {
    this.gatuadress = gatuadress;
    this.postnummer = postnummer;
    this.ort = ort;
}
// skapa en instans av en typ person
let Juanita = new Person("Juanita Pirizadeh", "jupirizadeh@gmail.com", 0704076123);
let Juanita = new Person("Jasmin Pirizadeh", "jasminp@hotmail.com", 0707654213);

// skapa en instans av typ adress
let juanitasAdress = new Address("Långvretsvägen 56", "16345", "Spånga");
let jasminsAdress = new Address("Ellen Keysgata 19", "13245", "Fruängen")

// objektet .push returnerar innegållet i arrayen juanitasAdress
Juanita.adress.push(juanitasAdress);

Juanita.print = function() {
    console.log(this.namn + "\n\n" + this.adress[0].gatuadress + "\n" + this.adress[0].postnummer + " " + this.adress[0].ort)
}

Juanita.print();


