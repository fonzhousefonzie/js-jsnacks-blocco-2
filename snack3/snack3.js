const numeriInteri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let somma = 0

for (let i = 0; i<numeriInteri.length; i++){
    if(i % 2 !== 0){
        somma = somma + numeriInteri[i];
    }
}

console.log(somma);