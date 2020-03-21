const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
var arrExpr = expr.split(''); 
var arr = new Array;
for (let i = 0; i <= arrExpr.length + 3000; i++) {
    var x = arrExpr.splice(0, 10);
    
    if (x[0] === '*') {
        arr[i] = ' ';
    } else {
        let y;
        let z = '';
        for (let j = 0; j < 5; j++) {
            y = x.splice(0, 2);                  
            if (y[0] == 1 && y[1] == 0) {
                z += '.';
            } else if (y[0] == 1 && y[1] == 1) {
                z += '-';
            }
        }
        arr[i] = MORSE_TABLE[z];
    }
}
var str = arr.join('');

return str;
}

module.exports = {
    decode
}

