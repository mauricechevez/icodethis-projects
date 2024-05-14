
const binaryValue = document.getElementById('binary-field');
const result = document.getElementById('result');
const hintText = document.getElementById('hint-text');
const form = document.querySelector('form')
const resultLabel = document.querySelector('.result-label');
const numberMap = [0,1];
let validKey;
let otherKey;


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


function labelVisibility(value){
    if(!isNaN(parseInt(value))){
        resultLabel.style.display = 'block'
    } else {
        resultLabel.style.display = 'none';
    }
}

// Event listeners
binaryValue.addEventListener('keydown', e=>{
    validKey = numberMap.find(n =>{
        return e.key <= n;
    })
    if(validKey == 0 || validKey == 1){
        writeError('')
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
    if(validKey == 0 || validKey == 1){
        convertToDec(e.target.value)
        labelVisibility(e.target.value)
    } else if (otherKey) {
        convertToDec(e.target.value)
        labelVisibility(e.target.value)
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

// Prevent accidental form submission:
form.addEventListener('submit', e=>{
    e.preventDefault();
})