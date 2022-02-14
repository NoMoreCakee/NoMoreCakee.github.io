let btn = document.getElementById("genbutton");
btn.onclick = generatePass;
console.log('asd');

function generatePass() {
    let text = document.getElementById("gentext");
    const a='abcdefghijklmnopqrstuvwxyz';
    let currentChars='abcdefghijklmnopqrstuvwxyz';
    const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTVWUXYZ';
    const numbers = '1234567890';
    const symbols = '$!~=()[]<>';
    let passOut = "";
    let charToAdd = "";
    let chars = ''

    if (document.querySelector('#upper').checked) {
        currentChars += uppercasechars;
    }

    if (document.querySelector('#numbers').checked) {
        currentChars += numbers;
    }

    if (document.querySelector('#symbols').checked) {
        currentChars += symbols;
    }

    chars = currentChars.split('');
    console.log(chars);
    for(let i = 0; i < 8; i++) {
        charToAdd = "";
        let random = Math.floor(Math.random() * currentChars.length);
        charToAdd += chars[random];
        passOut += charToAdd;
    }

    if (passOut.length < 8) {
        generatePass();
    }
    else {
        text.innerHTML = passOut;
    }
}