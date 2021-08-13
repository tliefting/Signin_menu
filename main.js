
const name = document.getElementById('name');
const nameError = document.getElementById('nameError');
// 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
const PassWord = document.getElementById('password');
const errorPassWord = document.getElementById('passwordError');


name.addEventListener('keyup', checkUserName); //KEYUP word dus geactiveerd wanneer de toets wordt losgelaten
name.addEventListener('keyup', checkPassWord);



function checkUserName(e) {
    if (e.target.value.includes('@')) { // wanneer er wél een @ wordt getypt
        nameError.textContent = "Gebruikersnaam mag geen @ bevatten"
    } else { // wanneer er niet een @ wordt getypt
        nameError.textContent = " ";
    }
}

function checkPassWord (e) {
    // Als het invoerveld leeg is, of wanneer het wachtwoord lang genoeg is willen we de melding NIET tonen
    if (e.target.value === '' || e.target.value.length > 6) {
        errorPassWord.textContent = '';
    } else {
        // in alle andere gevallen (e.target.value !== '' && e.target.value.length <= 6) tonen we de melding WEL
        errorPassWord.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}