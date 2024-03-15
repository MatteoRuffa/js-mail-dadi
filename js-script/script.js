/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


const emailList = [
    'Clelia-Boolean@gmail.com',
    'Emanuele-Boolean@protonmail.com',
    'Marco-Boolean@outlook.com',
    'Alessandro-Boolean@yahoo.com'
]
console.log(emailList);

let inList = false;
const elButton = document.querySelector('.btn.btn-primary');

elButton.addEventListener('click', function(){
    const userMail = document.getElementById('user-email').value;
    console.log(userMail);
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
});




/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/