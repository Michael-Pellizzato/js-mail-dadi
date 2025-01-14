/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email*/

//fase di preparazione

const invitati = [
    "marco.rossi@gmail.com", "simone.catullo@gmail.com", "giovanna.dilorenzo@gmail.com"
]

const latuaemail = prompt( "Inserisci la tua email")

let whitelist = false

//condizioni

for( let i = 0; i < invitati.length; i++){
    if (invitati[i] === latuaemail)
        whitelist = true;
}

//output

if (whitelist){
    console.log("iscrizione effettuata")
}else{
    console.log( "inscrizione negata")
}


