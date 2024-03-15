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



/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const elButtonDice = document.querySelector('.btn.btn-warning');

let boxUser;
let imgUser;
let textNodeUser;
let boxAi;
let imgAi;
let textNodeAi;

let result;

elButtonDice.addEventListener('click', function(){
    
    if (boxUser && boxAi) {
        boxUser.remove();
        boxAi.remove();
    }
    if (result) {
        result.remove();
    }
   
    
    let userDice = getRndInteger(1, 6);
    // console.log(`hai tirato un: ${userDice}`);

    boxUser = document.createElement('div');
    boxUser.classList.add('fw-medium', 'fs-5')
    imgUser = document.createElement('img');
    imgUser.src = './img/' + userDice + '.svg';

    textNodeUser = document.createTextNode("Il tuo tiro");
    
    document.querySelector('.small-container').appendChild(boxUser);
    boxUser.appendChild(imgUser);
    boxUser.appendChild(textNodeUser);
    
    let aiDice = getRndInteger(1, 6);
    // console.log(`la ai ha tirato un: ${aiDice}`);

    boxAi = document.createElement('div');
    boxAi.classList.add('fw-medium', 'fs-5')
    imgAi = document.createElement('img');
    imgAi.src = './img/' + aiDice + '.svg';

    textNodeAi = document.createTextNode("Il tiro dell'Ai");

    document.querySelector('.small-container').appendChild(boxAi);
    boxAi.appendChild(imgAi);
    boxAi.appendChild(textNodeAi);

    
    
    if (userDice > aiDice){
        result = document.createElement('div');
        result.innerText = 'Hai vinto'
        document.querySelector('.result-box').appendChild(result);
        // console.log('Hai vinto!');
    } else if (userDice < aiDice) {
        result = document.createElement('div');
        result.innerText = 'Hai perso!'
        document.querySelector('.result-box').appendChild(result);
        // console.log('Hai perso!');
    } else {
        result = document.createElement('div');
        result.innerText = 'Hai pareggiato'
        document.querySelector('.result-box').appendChild(result);
        // console.log('Hai pareggiato');
    }
});


