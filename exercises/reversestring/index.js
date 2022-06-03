// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str 
//     .split('')
//     .reverse()
//     .join('');
// }
// reverse('hello')

// function reverse(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// reverse('hello');

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return(reversed);
}
reverse('hello')

// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
//   }
// reverse('hello')

// function reverse(str){
//     if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
//     const backwards = [];
//     const totalItems = str.length - 1;
//     for(let i = totalItems; i >= 0; i--){
//       backwards.push(str[i]);
//     }
//     return backwards.join('');
//   }
//   reverse('hello')

// reverse = str => [...str].reverse().join('');
// reverse('hello')

module.exports = reverse;
