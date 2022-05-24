const arrayUno = [];
const arrayDue = [];


for (let i = 0; i < Math.floor(Math.random()*99); i++){
    let randomNum = Math.floor(Math.random()*99);
    arrayUno.push(randomNum);
}

for (let i = 0; i < (Math.floor(Math.random()*99)); i++){
    let randomNum = Math.floor(Math.random()*99);
    arrayDue.push(randomNum);
}

console.log(arrayUno);
console.log(arrayDue);

if(arrayUno.length < arrayDue.length){
    for (let i = arrayUno.length; i<arrayDue.length; i++){
        arrayUno.push(arrayUno.length);
    }
} else {
    for (let i = arrayDue.length; i<arrayUno.length; i++){
        arrayDue.push(arrayDue.length);
    }
}

console.log(arrayUno);
console.log(arrayDue);