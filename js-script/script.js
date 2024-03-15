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
let imgUser;
let imgAi;

elButtonDice.addEventListener('click', function(){
    if (imgUser && imgAi) {
        imgUser.remove();
        imgAi.remove();
    }
    
    let userDice = getRndInteger(1, 6);
    // console.log(`hai tirato un: ${userDice}`);
    imgUser = document.createElement('img');
    imgUser.src = './img/' + userDice + '.svg';
    document.querySelector('.small-container').appendChild(imgUser);
    
    let aiDice = getRndInteger(1, 6);
    // console.log(`la ai ha tirato un: ${aiDice}`);
    imgAi = document.createElement('img');
    imgAi.src = './img/' + aiDice + '.svg';
    document.querySelector('.small-container').appendChild(imgAi);
    
    if (userDice > aiDice){
        console.log('Hai vinto!');
    } else if (userDice < aiDice) {
        console.log('Hai perso!');
    } else {
        console.log('Hai pareggiato');
    }
});


