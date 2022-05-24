const nomi = ['Gigi', 'Gabriele', 'Alfonso', 'Ramon', 'Franco', 'Paolo', 'Ermenegildo', 'Felice', 'Sandro', 'Pietro'];
const cognomi = ['Rossi', 'Bianchi', 'Neri', 'Multicolor', 'Leica', 'Folcarelli', 'Monaco', 'Arnò', 'Nove', 'Dieci'];

for (let i = 0; i < 10; i++){
    let randomNum = Math.floor(Math.random()*nomi.length);
    console.log(nomi[randomNum] + " " + cognomi[randomNum]);
}