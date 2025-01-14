/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

//fase di preparazione

let persona = Math.floor((Math.random() * 6) + 1)

let computer = Math.floor((Math.random() * 6) + 1)

console.log(persona, computer)

//fase di condizione e output

if (persona > computer) {
    console.log("HAI VINTO")

} else if (persona < computer) {
    console.log("HAI PERSO")

} else {
    console.log("PAREGGIO")


} 
