let btn = document.getElementById("genbutton");
btn.onclick = generatePass;
console.log('asd');

function generatePass() {
    let text = document.getElementById("gentext");
    const a='abcdefghijklmnopqrstuvwxyz';
    let currentChars='abcdefghijklmnopqrstuvwxyz';
    const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTVWUXYZ';
    const numbers = '1234567890';
    const symbols = "$!~=()[]<>";
    if (document.querySelector('#length1').value > 128) {
        document.querySelector('#length1').value = 128;
        alert("Length must be lower or equal to 128!");
    }
    let leng = document.querySelector('#length1').value;
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
    text.innerHTML = "";

    let passOut = "";
    for(let i = 0; i<leng; i++) {
        passOut += chars[Math.floor(Math.random() * chars.length)];
    }
    
    console.log(passOut);
    text.innerText = passOut;

    //TODO: Mindenkeppen legyen a kijelolt kovetelmenyekbol a jelszoban legalabb 1
}