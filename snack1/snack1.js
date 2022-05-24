const insert = parseInt(prompt('inserisci un numero'));

if((insert % 2) === 0){
    alert('il risultato è ' + insert);
} else if(isNaN(insert)){
    alert('inserisci un NUMERO!')
}
else {
    alert(`il risultato è ${insert + 1}`);
}