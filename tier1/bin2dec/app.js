
const binaryValue = document.getElementById('binary-field');
const result = document.getElementById('result');
const hintText = document.getElementById('hint-text');
let validKey;
let otherKey;
const numberMap = [0,1];

// Functions
function convertToDec(num){
    const value = parseInt(num,2)
    if(!isNaN(value) ){
        result.innerText = parseInt(num,2)
    } else{
        result.innerText = '';
    }
}

function writeError(message){
    hintText.innerText = message;
}

function clearResult(){
    result.innerText = "";
}

// Event listeners
binaryValue.addEventListener('keydown', e=>{
    validKey = numberMap.find(n =>{
        return e.key <= n;
    })
    if(validKey == 0 || validKey == 1){
        return;
    } else if(e.key == "Backspace" || e.key == "Delete" || e.key =="ArrowRight" || e.key=="ArrowLeft"){
        otherKey = e.key;
        return;
    } else {
        e.preventDefault()
        writeError('Must enter either a 0 or 1 as a value')
    }
})

binaryValue.addEventListener('keyup',e =>{
    // console.log(otherKey)
    if(validKey == 0 || validKey == 1){
        convertToDec(e.target.value)
        writeError('')
    } else if (otherKey) {
        convertToDec(e.target.value)
        e.preventDefault()
    } else {
        console.log("Hit a non-acceptable key on keyboard")
        e.preventDefault()
    }
})

// Prevent more than 8 numbers from being entered
binaryValue.addEventListener('keypress', e=>{
    const value = e.target.value;
    if(value.length > 8){
        e.preventDefault()
        return false;
    }
})


// binaryValue.addEventListener('keyup', e=>{
    
//     if(e.key == 1 || e.key == 0){
//         convertToDec(e.target.value);
//         writeError('');
//     } else if(e.key == "Backspace"){
//         if(e.target.value ==" " || e.target.value == "" || e.target.value == null){
//             clearResult();
//             writeError('');
//         } else {
//             convertToDec(e.target.value);
//         }
//     } else {
//         // alert('hey')
//         writeError('Input must be either a 1 or 0');
//         return false
//     } 
// })


// binaryValue.addEventListener('keyup', e=>{
//     console.log(e.key)
//     console.log(e.key != 1)
//     if(e.key != 1 || e.key != 0) {
//         e.preventDefault();
//         writeError('Input must be either a 1 or 0');
//         console.warn('hello');
//     } else {
//         alert('huh?')
//     }
// })
