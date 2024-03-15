/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
const emailList = [
    'Clelia-Boolean@gmail.com',
    'Emanuele-Boolean@protonmail.com',
    'Marco-Boolean@outlook.com',
    'Alessandro-Boolean@yahoo.com'
]
console.log(emailList);


const elButton = document.querySelector('.btn.btn-primary');

elButton.addEventListener('click', function(){
    let inList = false;
    const userMail = document.getElementById('user-email').value;
    console.log(userMail);
    for (let i = 0; i < emailList.length; i++) {
        if (userMail === emailList[i]) {
            inList = true;
        } 
    }
    console.log(inList);
    
    let showResult = document.createElement('div');
    showResult.classList.add('fw-medium', 'fs-5');
    document.querySelector('.container').appendChild(showResult);

    if (inList) {
        showResult.innerText = 'Ok sei sulla lista, puoi entrare!';
        console.log(`Ok sei sulla lista, puoi entrare!`);
    } else {
        showResult.innerText = 'Mi dispiace non sei sulla lista!';
        console.log(`Mi dispiace non sei sulla lista!`);
    }
});
*/


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const elButtonDice = document.querySelector('.btn.btn-warning');

elButtonDice.addEventListener('click', function(){
    let userDice = getRndInteger(1, 6);
    console.log(`hai tirato un: ${userDice}`);
    
    let aiDice = getRndInteger(1, 6);
    console.log(`la ai ha tirato un: ${aiDice}`);
    
    if (userDice > aiDice){
        console.log('Hai vinto!');
    } else if (userDice < aiDice) {
        console.log('Hai perso!');
    } else {
        console.log('Hai pareggiato');
    }
});


let userDice = getRndInteger(1, 6);
console.log(`hai tirato un: ${userDice}`);

let aiDice = getRndInteger(1, 6);
console.log(`la ai ha tirato un: ${aiDice}`);

if (userDice > aiDice){
    console.log('Hai vinto!');
} else if (userDice < aiDice) {
    console.log('Hai perso!');
} else {
    console.log('Hai pareggiato');
}