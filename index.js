// Code your solutions in this file

const sinon = ["Guadalupe", "Ollie", "Aki"];

function writeCards(sinon){
    for (let i = 0; i < sinon.length; i++) { 
    console.log(`Thank you, ${sinon[i]}, for the wonderful surprise gift!`); 
    debugger;
    }
    return sinon;
}
writeCards();


function countDown(number) {
    let posNumber = number;
    while (posNumber > -1) {
         console.log(posNumber);
         posNumber--;
    }
}
