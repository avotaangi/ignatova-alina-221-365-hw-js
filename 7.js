function cesar(str, shift, action) {
    const alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    const strLowerCase = str.toLowerCase();
    let result = "";
    
    for (let i = 0; i < strLowerCase.length; i++) {
        const currentChar = strLowerCase[i];
        const isUpperCase = str[i] === str[i].toUpperCase();
    
        if (alphabet.includes(currentChar)) {
            const currentIndex = alphabet.indexOf(currentChar);
            let newIndex;
    
            if (action === 'encode') {
                newIndex = (currentIndex + shift) % alphabet.length;
            } else if (action === 'decode') {
                newIndex = (currentIndex - shift + alphabet.length) % alphabet.length;
            }
    
            const newChar = alphabet[newIndex];
    
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            result += currentChar;
        }
    }
    
    return result;
}
    