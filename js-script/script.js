/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const userMail = prompt('inserisci la tua email');
console.log(userMail);

const emailList = [
    'Clelia-Boolean@gmail.com',
    'Emanuele-Boolean@protonmail.com',
    'Marco-Boolean@outlook.com',
    'Alessandro-Boolean@yahoo.com'
]
console.log(emailList);

let inList = false;
for (let i = 0; i < emailList.length; i++) {
    if (userMail === emailList[i]) {
        inList = true;
    } else {
        inList = false;
    }
}
console.log(inList);

if (inList) {
    console.log(`Ok sei sulla lista, puoi entrare!`);
} else {
    console.log(`Mi dispiace non sei sulla lista!`);
}

