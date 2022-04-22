let summa = 0; //alustetaan muuttuja
//Määritellään process.stdin standardiksi input-objektiksi.
var standard_input = process.stdin; 
//Asetetaan input-merkistö
standard_input.setEncoding('utf-8');
//Aloitetaan sovellus ja kirjoitetaan käyttäjälle ohjeita
console.log("JavaScript-laskin, konsolisovellus (V0.1)");
console.log('Sovellus suljetaan kirjoittamalla "exit"');
process.stdout.write("Anna ensimmäinen luku: "); //Prosessi laitetaan käyntiin
//Seuraavaa rutiinia kutsutaan aina, kun käyttäjä kirjoittaa jotain ja/tai painaa enteriä 
//Tämä lukee niin kauan tuota silmukkaa, kunnes annetaan exit
standard_input.on('data', function (data) { 

    // Sovellus suljetaan, kun käyttäjää antaa avainsanan "exit"
    if (data === 'exit\r\n'){
        console.log("Käyttäjä sulki laskimen");
        process.exit();
    } else //Muussa tapauksessa lasketaan yhteen lukujen summia
    {
        n1=0, n2=0, t=0;
        function summa() {
            n1=Number(document.calculator.numero1.value);
            n2=Number(document.calculator.numero2.value);
            t=n1+n2;
            document.calculator.tulos.value=t;
        }
        function erotus() {
            n1=Number(document.calculator.numero1.value);
            n2=Number(document.calculator.numero2.value);
            t=n1-n2;
            document.calculator.tulos.value=t;
        }

        function tulo() {
            n1=Number(document.calculator.numero1.value);
            n2=Number(document.calculator.numero2.value);
            t=n1*n2;
            document.calculator.tulos.value=t;
        }

        function jako() {
            n1=Number(document.calculator.numero1.value);
            n2=Number(document.calculator.numero2.value);
            t=n1/n2;
            document.calculator.tulos.value=t;
        }
    }

});

