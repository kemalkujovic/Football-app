// codewars
// pretoviriti u promis toaster.

// // // unos = prompt("unesite neku vrednost");
// // // unos1 = prompt("unesite neku vrednost 2")
// // // if(unos % 2 === 0){
// // //     console.log('Broj je paran');
// // // }else if(unos % 2 === 1){
// // //     console.log('broj je neprann');
// // // }
// // // if(unos === unos1){
// // //     console.log('vasi brojevi su isti')
// // // }else{
// // //     console.log('vasi brojevi nisu isti');
// // // }

// // // unos2 = prompt('unesite temepraturu');

// // // if(unos2 < 0){
// // // console.log('frezing');
// // // }else if(unos2 <= 10){
// // // console.log('very cold');

// // // }else if(unos2 < 30){
// // // console.log('thenn normal temp');
// // // }
// // // else if(unos2 <= 40){
// // // console.log('then its hot');
// // // }
// // // else if(unos2 >= 40){
// // // console.log('its very hot');
// // // }

// // // // 3 zadatak

// // // let broj = prompt('Unesite broj');

// // // if(broj >= 0){
// // //     console.log('Vas broj je pozitivan');
// // // }else{
// // //     console.log('vas broj je negativan');
// // // }

// // // // 4 zadatak

// // // let year = prompt('unesite godinu');

// // // if(year % 4 === 0){
// // //     console.log(`${year} je prestupna godina`);
// // // }else{
// // //     console.log(`${year} nije presudna godina`);
// // // }

// // // // 8 zadatak

// // // let number1 = parseInt(prompt('Unesite vas prvi broj'));
// // // let number2 = parseInt(prompt('Unesite vas drugi broj'));
// // // let number3 = parseInt(prompt('Unesite vas treci broj'));

// // // if(number1 > 2 && number1 > number3){
// // //     console.log(`${number1} je najveci broj`);
// // // }else if(number2 > number3 && number2 > number1 ){
// // //     console.log(`${number2} je najveci broj`);
// // // }else if(number3 > number1 && number3 > number2){
// // //     console.log(`${number3} je najveci broj`);
// // // }
// console.clear();
// function even_or_odd(number) {
//   if (number % 1) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// let zerin = even_or_odd(-4,32321321);
// console.log(zerin);

// function positiveSum(arr) {
//   let mak = 0;
//   for (let i = 0; i < arr.length; i++) {
//     mak += arr[i];
//   }

//   arr.forEach((el) => {
//     return (mak += el);
//   });
//   arr.reduce((curr, prevv) => {
//     return curr + prevv;
//   }, 0);
// }

// positiveSum([1, 2, 3, 4, 5]); // resenje 15

// let arr = [9, 2, 3, 10, 4, 5];
// let maks = arr[0];
// let secondmaks = arr[1];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maks) {
//     secondmaks = maks;
//     maks = arr[i];
//   } else if (arr[i] > secondmaks) {
//     secondmaks = arr[i];
//   }
// }
// console.log(secondmaks);

// // // // 15 zadatak

// // // let ugao1 = parseInt(prompt('Unesite prvi ugao'));
// // // let ugao2 = parseInt(prompt('Unesite drugi ugao'));
// // // let ugao3 = parseInt(prompt('Unesite treci ugao'));

// // // ukupnoUglova = ugao1 + ugao2 + ugao3;

// // // if(ukupnoUglova === 180){
// // //     console.log('Trugao se moze formirati');
// // // }else{
// // //     console.log('Trugao se ne moze formirati');
// // // }

// // // // 23 zadatak

// // // let nedelja = prompt('Unesite broj za dan');

// // // if(nedelja == 1){
// // //     console.log('Ponedeljak');
// // // }else if(nedelja == 2){
// // //     console.log('Utorak');
// // // }
// // // else if(nedelja == 3){
// // //     console.log('Sreda');
// // // }
// // // else if(nedelja == 4){
// // //     console.log('Cetvrtak');
// // // }
// // // else if(nedelja == 5){
// // //     console.log('Petak');
// // // }
// // // else if(nedelja == 6){
// // //     console.log('Subota');
// // // }
// // // else if(nedelja == 7){
// // //     console.log('Nedelja');
// // // }else{
// // //     console.log('Uneli ste pogresan broj');
// // // }

// // // let ugao4 = Number(prompt('unesite vas ugao'));

// // // console.log(ugao4);

// // // const btn = document.querySelector('#prviBtn');

// // // btn.addEventListener('click', () => {
// // //     const input = document.querySelector('input').value;

// // //     if(input === '1'){
// // //     console.log('Ponedeljak');
// // //     }else if(input === '2'){
// // //     console.log('Utorak');
// // //     }
// // //     else if(input === '3'){
// // //     console.log('Sreda');
// // //     }
// // //     else if(input === '4'){
// // //     console.log('Cetvrtak');
// // //     }
// // //     else if(input === '5'){
// // //         console.log('Petak');
// // //     }
// // //     else if(input === '6'){
// // //         console.log('Subota');
// // //     }
// // //     else if(input === '7'){
// // //         console.log('Nedelja');
// // // }else{
// // //     console.log('Uneli ste manji broj od 7');
// // // }
// // // });

// // // let a = prompt('Unesite prvu stranicu')
// // // let b = prompt('Unesite drugu stranicu')
// // // let c = prompt('Unesite trecu stranicu')

// // // if(a + b < c){
// // //     console.log('ne mozemo formirati trugao');
// // // }

// // // else if(a + c < b){
// // //     console.log('ne mozemo formirati trugao');
// // // }

// // // else if(b + c < a){
// // //     console.log('ne mozemo formirati trugao');
// // // }else{
// // //     console.log('trugao je validan');
// // // }

// // //  7 zadatak

// // // let matematika = parseInt(prompt('Unesite ocenu iz matematike'));
// // // let istorija = parseInt(prompt('Unesite ocenu iz istorija'));
// // // let geografija = parseInt(prompt('Unesite ocenu iz geografija'));

// // // let avgOcena = (matematika + istorija + geografija) / 3;

// // // if(avgOcena > 91 && avgOcena <= 100){
// // //     console.log('Ocena je 10');
// // // }else if(avgOcena > 81){
// // // console.log('ocena je 9');
// // // }else if(avgOcena > 71){
// // //     console.log('ocena je 8');
// // // }else if(avgOcena > 61){
// // //     console.log('ocena je 7');
// // // }else if(avgOcena > 51){
// // //     console.log('ocena je 6');
// // // }else if(avgOcena < 50){
// // //     console.log('Nazalost niste polozili ispit');
// // // }

// // // // 8 zadatak

// // // let nedelja = prompt('Unesite broj za dan');

// // // if(nedelja == 1){
// // //     console.log('Ponedeljak');
// // // }else if(nedelja == 2){
// // //     console.log('Utorak');
// // // }
// // // else if(nedelja == 3){
// // //     console.log('Sreda');
// // // }
// // // else if(nedelja == 4){
// // //     console.log('Cetvrtak');
// // // }
// // // else if(nedelja == 5){
// // //     console.log('Petak');
// // // }
// // // else if(nedelja == 6){
// // //     console.log('Subota');
// // // }
// // // else if(nedelja == 7){
// // //     console.log('Nedelja');
// // // }else{
// // //     console.log('Uneli ste pogresan broj');
// // // }

// // // 9 zadatak

// // // let rec = prompt('Unesite slovo');

// // // if(rec === 'a'){
// // //     console.log('SAMOGLASNIK');
// // // }else if(rec === 'e'){
// // //     console.log('SAMOGLASNIK');

// // // }else if(rec === 'i'){
// // //     console.log('SAMOGLASNIK');

// // // }else if(rec === 'o'){
// // //     console.log('SAMOGLASNIK');

// // // }else if(rec === 'u'){
// // //     console.log('SAMOGLASNIK');

// // // }
// // // else{
// // //     console.log('SUGLASNIK');
// // // }

// // // for(i = 171; i > 16; i--){
// // //     console.log(i);
// // // }

// // // zadatak 5

// // // for(i = 1; i <= 10; i++){
// // //     if(i === 7) continue;
// // //     console.log(i);

// // // if(i != 7){
// // //     console.log(i);
// // // }
// // // }

// // // // zadatak 6
// // // let ukupno = 0
// // // for(i = 0; i <=20; i += 2){

// // //     ukupno += i;
// // //     console.log(`Nakon broja, ${i} zbir je ${ukupno}`);
// // // }

// // // // zadatak 7
// // // for(i = 0; i < 3; i++){
// // //     console.log(`${i} python`);
// // // }

// // // for(i = 0; i < 3; i++){
// // //     console.log(`${i} je super`);
// // // }

// // // let i = 0;

// // // while (i <= 10) {
// // //   i++;
// // //   if(i === 7){
// // //     continue;
// // //   }else{

// // //       console.log(i);
// // //   }
// // // }

// // // const broj = Number(prompt('Unesite broj'));

// // // let i = 0;

// // // while(i<broj){
// // //     i++;
// // //     if(i % 3 === 0){
// // //         console.log(i);
// // //     }

// // // }

// // // do{
// // //     console.log(i);
// // //     i++
// // // }while(i < 12);

// // // // koiristici for petlju izbrisati razmake date recenice.
// // // let recenica = "Danas je nakon 20 dana padala kisa";
// // // let recenica2 = "";

// // // for(let i = 0; i < recenica.length; i++){
// // //     if(recenica[i] === " ") {
// // //         continue;
// // //     }else{
// // //         recenica2 += recenica[i];
// // //     }
// // // }
// // // console.log(recenica2);

// // //

// // // let recenica = "IT Camp je kurs koji treba da traje 9 meseci"

// // // let recenica2 = "";

// // // // izbrisati a i m karaktere date racenica;

// // // for(let i = 0; i < recenica.length; i++){
// // //     if(recenica[i] === 'a' || recenica[i] === 'm'){
// // //         continue
// // //     }else{
// // //         recenica2 += recenica[i]
// // //     }
// // // }

// // // console.log(recenica2);

// // // .toUpperCase();
// // // fizz bazz challenge

// // // iteracija se vrsi od 1 do 100(ukljucici 100).
// // // ako je dati broj deljiv sa 3 u konzoli se ispisuje FIZZ,
// // // ako je dati broj deljiv sa 5 u konozoli se ispisuje BUZZ,
// // // ako je dati broj deljiv i sa i sa 5 ispisuje fizz i buzz

// // // for (let i = 1; i <= 100; i++) {
// // //   if (i % 3 === 0 && i % 5 === 0) {
// // //     console.log("FIZZ i Buzz");
// // //   } else if (i % 5 === 0) {
// // //     console.log("buzz");
// // //   } else if (i % 3 === 0) {
// // //     console.log("FIZZ");
// // //   }else{
// // //     console.log(i);
// // //   }
// // // }

// // // let recenica = "Nakon svakog vezbanje je preporuka postaviti promene na github";

// // // // napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom

// // // let recenica2 = '';

// // // for(let i = 0; i < recenica.length; i++){
// // //     if(i === 0){

// // //         recenica2 += recenica[i].toUpperCase();
// // //     }else if(recenica[i-1] === " "){

// // //         recenica2 += recenica[i].toUpperCase();
// // //     }else{
// // //         recenica2 += recenica[i]
// // //     }

// // // }
// // // console.log(recenica2);

// // // let recenica = "Nakon svakog vezbanje je preporuka postaviti promene na github";

// // // // napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom

// // // let recenica2 = '';

// // // for(let i = 0; i < recenica.length; i++){
// // //     if(i === 0){

// // //         recenica2 += recenica[i].toUpperCase();
// // //     }else if(recenica[i+1] === " "){

// // //         recenica2 += recenica[i].toUpperCase();
// // //     }else{
// // //         recenica2 += recenica[i]
// // //     }

// // // }
// // // console.log(recenica2);

// // // let recenica = "Nakon svakog vezbanje je preporuka postaviti promene na github";

// // // // sabrati razmake i ispisati njihov broj u konzoli.
// // // let brojRazmaka = 0;
// // // for(let i = 0; i <= recenica.length - 1; i++){
// // //     if(recenica[i] === " "){
// // //         brojRazmaka++;

// // //     }
// // // }

// // // console.log(brojRazmaka);

// // // Iz date recenice izbrisati razmake i ispisati u konzoli novudobijanu recenicu/

// // // let recenica = "nakon svakog vezbanje je preporuka postaviti promene na github";

// // // napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom

// // // let recenica2 = '';

// // // for(let i = 0; i < recenica.length ; i++){
// // //     if(i === recenica.length - 1){

// // //         recenica2 += recenica[i].toUpperCase();
// // //     }else if(recenica[i+1] === " "){

// // //         recenica2 += recenica[i].toUpperCase();
// // //     }else{
// // //         recenica2 += recenica[i]
// // //     }

// // // }
// // // console.log(recenica2);

// // // let recenica = "nakon svakog vezbanje je preporuka postaviti promene na github";

// // // let recenica2 = '';
// // // for (let i = 0; i < recenica.length; i++){
// // //     if(recenica[i] === ' '){
// // //         continue;

// // //     }else{
// // //         recenica2 += recenica[i]
// // //     }
// // // }
// // // console.log(recenica2);

// // // if(password === nekipassword){
// // //     console.log(nekipassword);
// // // }else{
// // //     console.log('uneli ste pogresnu lozinku');
// // // }

// // // let nekipassword = 'kemal123'
// // // let password = prompt('Unesite vasu sifru');

// // // korisnik = '';

// // // while(korisnik !== nekipassword){
// // //     korisnik = prompt('Unesite sifru')
// // // }

// // //

// // // let broj = 35;
// // // let korisnik = 0;

// // // while(broj === korisnik){

// // //     if(broj !== 35){
// // //         if(broj > 35){
// // //             alert('Vas broj je veci');
// // //         }else if(broj < 35){
// // //             alert('vas broj je manji')
// // //         }
// // //     }
// // //     korisnik =  prompt('Unesite broj');
// // // }

// // // console.log('Pogodili ste broj');

// // // let noviBr = 0;

// // // while(true){
// // //     let broj1 = Number(prompt('unesite vas prvi broj'));
// // //     let broj2 = Number(prompt('unesite vas drugi broj'));
// // //     let opert = prompt('Unesite znak');
// // //     if(opert === '+'){
// // //         alert(broj1 + broj2);
// // //     }else if(opert === '-'){
// // //         alert(broj1 - broj2)
// // // }

// // // if(opert === '0'){
// // //     alert('izlaz')
// // //     break;
// // // }
// // // }

// // // let broj = 35;

// // // let korisnik = null;

// // // while(broj !== korisnik){
// // //     korisnik = Number(prompt('Unesite vas broj'));
// // //     if(broj > korisnik){
// // //         alert('Uneli ste manji broj');

// // //     }else if(broj < korisnik){
// // //         alert('uneli ste veci broj');
// // //     }else{
// // //         console.log('uneli ste ispriavan broj');
// // //     }
// // // }
// // // alert('tacan broj');

// // // 1.
// // // let number = 50312312;

// // // let rec = String(number).length;
// // // console.log(rec);

// // // 2.
// // // const racunanje = function(brojcic){

// // //     let rec = String(brojcic).length;
// // //     console.log(rec);
// // // }

// // // racunanje(23123);

// // // 3.

// // // const racunanje = function(){
// // //     let broj = Number(prompt('unesite vas broj'));
// // //     let rec = String(broj).length;
// // //     console.log(rec);
// // // }

// // // racunanje();

// // // parne elementa niza proveravamo
// // // let nizovi = [];

// // // broj = 10;
// // // for(let i = 0; i < broj; i++){

// // //     el = prompt('unesite element');
// // //     if(el % 2 === 0){

// // //         nizovi.push(el);
// // //     }

// // // }
// // // console.log(nizovi);

// // // for (let i = 0; i < nizovi.length; i++) {
// // //     console.log(nizovi[i]);

// // // }

// // // let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // for(let i = niz.length - 1; i >= 0; i--){
// // //     console.log(niz[i]);
// // // }
// // // conctact
// // // let niz = [1,2,3,4,5];
// // // maxEl = niz[0];
// // // secEl = niz[0];

// // // for (let i = 0; i < niz.length; i++) {
// // //     if(niz[i] > maxEl){
// // //       maxEl = niz[i];
// // //     }

// // // }
// // // console.log(maxEl);
// // // for(let i = 0; i < niz.length; i++){
// // //   if(niz[i] < maxEl && niz[i] > secEl){
// // //     secEl = niz[i]
// // //   }
// // // }
// // // console.log(secEl);

// // // 2 zadatak

// // // let niz = [];
// // // let broj = 10;
// // // let ukupno = 0;
// // // for(let i = 0; i < broj; i++){
// // //     unos = Number(prompt('unesite broj'));
// // //     niz.push(unos)
// // // }
// // // console.log(niz);
// // // for(let i = 0; i < niz.length; i++){
// // //     // ukupno += niz[i];
// // //     ukupno = ukupno + niz[i]

// // // }
// // // console.log(ukupno);

// // // bonus zadatak

// // // let niz = [13, 214, 44, 33];
// // // maxEl = niz[0];
// // // secEl = 0;
// // // for (let i = 0; i < niz.length; i++) {
// // //   if (niz[i] > maxEl) {
// // //     secEl = maxEl; // stavljamo zadnju vrednost od maxEl
// // //     maxEl = niz[i];
// // //   }
// // //   if (niz[i] !== maxEl && niz[i] > secEl) {
// // //     secEl = niz[i];
// // //   }
// // // }
// // // console.log(maxEl);
// // // console.log(secEl);

// // // 11 zadatak

// // // deklarirajte niz naziva niz i ogranicte ga na 10 elemenata. , kopirate u drugi niz samo parne elemente prvog niza.

// // // let niz = [3, 4, 5, 7, 6, 8, 9, 10];
// // // let emptyNiz = [];
// // // for (let i = 0; i < niz.length; i++) {
// // //   if(niz[i] % 2 === 0){
// // //     emptyNiz.push(niz[i])

// // //   }
// // // }
// // // console.log(emptyNiz);

// // // 12 zadatak
// // // napunite niz s 10 elemenata i ispiste najveci i najmanji element niza (min/max);

// // // let niz = [4, 3, 5, 6, 7, 8, 9, 10];
// // // maxNum = niz[0];
// // // minNum = niz[0];
// // // for (let i = 0; i < niz.length; i++) {
// // //   if (niz[i] > maxNum) {
// // //     maxNum = niz[i];
// // //   }
// // //   if (niz[i] < minNum) {
// // //     minNum = niz[i];
// // //   }
// // // }
// // // console.log(`Najveci broj ${maxNum}`);
// // // console.log(`Najmanji broj ${minNum}`);

// // // let niz = [4, 3, 5, 6, 7, 8, 9, 10];
// // // suma = 0;
// // // niz.forEach((e) => {
// // //   suma += e;
// // // });

// // // // console.log(suma);
// // // // for (let i = 0; i < 3; i++) {
// // // //   for (let j = 0; j < 4; j++) {
// // // //     // console.log('bilo sta');
// // // //   }
// // // // }
// // // suma = 0;
// // // console.log(arr[0][1]);
// // // arr = [
// // //   [12, 22, 3],
// // //   [2, 3, 3],
// // //   [333, 444, 33],
// // //   [333, 112, 33],
// // //   [333, 432, 33],
// // // ];

// // // for (let i = 0; i < arr.length; i++) {
// // //   for (let j = 0; j < arr[i].length; j++) {

// // // }
// // // }
// // // console.log(suma);

// // // zadatak 1 :  sabrati zadnje
// // // for (let i = 0; i < arr.length; i++) {
// // //     suma += arr[i][arr[i].length - 1];
// // //     // console.log(suma);
// // // }

// // // zadatak 2:

// // // for (let i = 0; i < arr.length; i++) {

// // //     if(arr[i] % 2 === 0){
// // // //         for (let j = 0; j < arr[i].length; j++) {
// // // //         if(arr[i][j] % 2 === 0){
// // // //             suma += arr[i][j];
// // // //         }
// // // //         }
// // // //     }
// // // // }

// // // // console.log(suma);

// // // // arr = [
// // // //     [1, 2, 3],
// // // //     [4, 5, 6],
// // // //     [7, 8, 9],
// // // //   ];
// // // // suma = 0;
// // // // for (let i = 0; i < arr.length; i++) {
// // // //     for (let j = 2; j < arr[i].length; j++) {

// // // //     }

// // // // }

// // // // const arr = [
// // // //   [1, 3, 4, 2],
// // // //   [4, 5, 3, 5],
// // // //   [5, 2, 6, 4],
// // // //   [8, 2, 9, 3]
// // // // ];

// // // const arr = [
// // //   [1, 2, 3],
// // //   [4, 5, 6],
// // //   [7, 8, 9],
// // // ];
// // // let ispis = "";
// // // let ispis2 = "";
// // // let suma = 0;
// // // let suma2 = 0;
// // // for (let i = 0; i < arr.length; i++) {
// // //   ispis += arr[i][i];
// // //   ispis2 += arr[i][arr.length - 1 - i];
// // //   suma += arr[i][i];
// // //   suma2 += arr[i][arr.length - 1 - i];

// // // }
// // // console.log(ispis);
// // // console.log(ispis2);
// // // console.log(suma);
// // // console.log(suma2);

// // // console.log(suma);
// // // //   1
// // // //     5
// // // //       9
// // // //       samo glavne dijagonalne gorenadenih brojevi
// // // //       3
// // // //     5
// // // //   7
// // // //   suma sporedne dijagonale gorenavedenih brojeva

// // // arr.forEach(e => {
// // // e.forEach(element => {
// // //   console.log(element);
// // // });
// // // })
// // // let zvezdica = '*';
// // // unos = Number(prompt('unesite broj redova'));
// // // str = '';
// // // for (let i = 0; i < unos; i++) {
// // //   str += '*'
// // //   console.log(str);
// // // }

// // // unos = Number(prompt('unesite broj redova'));
// // // for (let i = 1; i <= unos; i++) {
// // //   str = '';
// // //   for (let j = 0; j < i; j++) {
// // //     str += i;
// // //   }
// // //   console.log(str);
// // // }

// // // unos = Number(prompt("unesite broj redova"));
// // // lastN = 0;
// // // for (let i = 1; i <= unos; i++) {
// // //   str = "";
// // //   for (let j = 0; j < i; j++) {
// // //     lastN++;
// // //     str += lastN;
// // //   }
// // //   console.log(str);
// // // }

// // // unos = Number(prompt("unesite broj redova"));
// // // for (let i = 0; i < unos; i++) {
// // //   let output = '';
// // //   for (let j =0; j < unos - i; j++) {

// // //     output += ' ';
// // //   }
// // //   for (let k = 0; k <= i; k++){
// // //     output += '* ';
// // //   }
// // //   console.log(output);
// // // }

// // unos = 4;
// // zvezdice = "*";

// // 7 zadatak prompt // prompt kakulator

// // const unos = Number(prompt('Unesite broj'));
// // const unos2 = Number(prompt('Unesite drug broj'));
// // const operacija = prompt('* / + -');

// // if (operacija === '+') {
// //   alert(`Zbir je ${unos + unos2}`)
// // }

// // for (let i = 0; i < unos; i++) {
// //   let razmak = "";
// //   for (let j = i; j < unos - 1; j++) {
// //     razmak += " ";
// //   }
// //   console.log(razmak + zvezdice);
// //   zvezdice += " *";
// // }
// // // osnovne programiranje python
// // // osnovni racunarskih mreza
// // // husein nasser

// // // up going js

// // const numbers = [7, 10, 12, 14, 4];

// // // pomozen sa 3 , kvadiramo i veci br od 15

// // const pomozeni = numbers
// //   .map((el) => el * 3)
// //   .map((el) => el ** 2)
// //   .filter((el) => el < 200);

// // console.log(pomozeni);

// // const arr1 = [12, 15, 19, 22, 58, 36, -32, -57];

// // const noviArr = arr1.filter((el) => el > 18);
// // console.log(noviArr);

// // const pomnArr = arr1.map((el) => el * 3);
// // console.log(pomnArr);
// // const arr4 = [1, 35, 47, 65, 44, 12, 78, 87];
// // const zajArr = arr4.filter((el) => el % 2 === 0).map((el) => el * 2);
// // console.log(zajArr);

// // const arr5 = [1, 3, 5, 7, 9, 6, 2];

// // const suma = arr5.reduce((acc, curr) => acc + curr);
// // console.log(suma);

// // // iz datog niza izdvojiti sve parne brojeve vece od nul. Zatim ih
// // // im vratiti sumu elemenata pom sa 3

// // const arr6 = [-56, -32, 55, 12, 14, 13, 45, 63];

// // // const arr7 = arr6
// // //   .filter((el) => el > 0)
// // //   .map((el) => el % 2 === 0)
// // //   .reduce((acc, curr) => (acc + curr) * 3);

// // //   console.log(arr7);

// // // const suma3 = arr6
// // //   .filter((el) => el > 0 && el % 2 === 0)
// // //   .map((el) => el * 3)
// // //   .reduce((acc, curr) => acc + curr, 0);

// // // console.log(suma3);

// // // // reduce - 2 primer

// // // const arr13 = [420, 999, 1320, 560, 740, 2090];

// // // const artikli = arr13.reduce((acc, curr) => acc + curr, 400);

// // // // iz datog niza vratiti sumu elemenata koji su iz intervala (od 12 do 32) pomnozenih sa 5.
// // // // pocetna vrednost sume treba biti 299.

// // // // const arr8 = [-14, 26, 21, 13, 19, 55, 46, 58, 96];

// // let ns = 0,
// //   ew = 0;
// // function isValidWalk(walk) {
// //   if (walk.length === 10) {
// //     for (let i = 0; i < walk.length; i++) {
// //       if (i == "n") ns += 1;
// //       if (i == "s") ns -= 1;
// //       if (i == "e") ew += 1;
// //       if (i == "w") ew -= 1;
// //     }
// //   } else return false;
// //   return ns === 0 && ew === 0;
// // }

// // console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

// // function addBinary(a, b) {
// //   let bin = Number(a) + Number(b);
// //   return bin.toString(2);
// // }

// // console.log(addBinary(1, 1));

// // // function accum(s) {
// // //   let arr = [];

// // //   for(let i =0; i < s.length; i++){
// // //     arr.push(s[i])
// // //   }
// // //   return arr.join('-').toUpperCase();
// // //   // your code
// // // }
// // //   console.log(accum('fada'));

// // // function accum(s) {
// // //   let arr = []
// // //   for (let i = 0; i < s.length; i++) {
// // //   arr.push(format(s[i], i + 1))
// // //   }
// // //   return arr.join('-');
// // //   }
// // //  function format(s, num) {
// // //   console.log(num);
// // //   let letter = s.toUpperCase()
// // //  while (letter.length !== num) {
// // //   letter += s.toLowerCase()
// // //   }
// // //   return letter;
// // //   }

// // //   console.log(accum('dsafg'));

// // // w3rescoutce array //

// // //Code here
// // console.log("----------------");
// // function sumTwoSmallestNumbers(numbers) {
// //   let lowNum = numbers[0];
// //   let sum = 0;
// //   let lowNum2 = numbers[1];
// //   for (let i = 1; i < numbers.length; i++) {
// //     if (numbers[i] < lowNum) {
// //       lowNum2 = lowNum;
// //       lowNum = numbers[i];
// //     } else if (numbers[i] < lowNum2) {
// //       lowNum2 = numbers[i];
// //     }
// //   }
// //   return (sum = lowNum + lowNum2);
// // }

// // console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 39]));

// function sumTwoSmallestNumbers(numbers) {
//   let min = numbers[0];
//   let secondMin = numbers[1];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       secondMin = min;
//       min = numbers[i];
//     } else if (numbers[i] < secondMin) {
//       secondMin = numbers[i];
//     }
//   }
//   return min + secondMin;
// }
// console.log(sumTwoSmallestNumbers([4, 3, 2, 1])); // 3
// // // console.log(sumTwoSmallestNumbers([8, 7, 6, 5]));  // 11
// // //   console.log(sumTwoSmallestNumbers([5,8,12,19,39]));
// // console.log(`===============`);

// // // color = ["Blue", "Green", "Red", 'Orange', 'Violet'];
// // // o = ["th", "st", "nd","rd"];

// // // color.forEach((el, i) => {
// // //   o.forEach(element => {
// // //     console.log(`${i + 1}${element} Chocie is ${el}`);
// // //   })

// // // });

// // color = ["Blue", "Green", "Red", "Orange", "Violet"];
// // o = ["th", "st", "nd", "rd"];

// // color.forEach((el, i) => {
// //   console.log(`${i + 1}${o[0]} Chocie is ${el}`);
// // });

// // array1 = [3, 5, 6, 7, 8, 136, 7, 8, 136, 7, 8, 13];
// // array2 = [1, 0, 2, 3, 4];

// // // let lastNum = array1.pop()
// // // array1.forEach((el, i) => {
// // // array3.push(el + array2[i], el)

// // // })
// // // console.log(array3);

// // // if(array1.length > array2.length){
// // // }

// // arrayy = [NaN, 0, 15,false,-22,47,null]

// // // arrayNew = arrayy.filter((el) => el !== false && el !== NaN && el !== null);
// // // console.log(arrayNew);

// // arrayy = [NaN, 0, 15,false,-22,47,null]

// // arrayNew = arrayy.filter((el) => typeof el === 'number' && el !== 0 && el !== NaN);
// // console.log(arrayNew);

// // arrayNew = arrayy.filter((el)=> {
// //   if(el){
// //     return el
// //   }
// // })

// // // Write a JavaScript function to find the unique elements from two arrays.

// // // Test Data :
// // // console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // // ["1", "2", "3", "10", "100"]
// // // console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // // ["1", "2", "3", "10", "100"]

// // console.log('---------------');

// // domaci REMOVE DUPLICATE
// // const difference = (arr, arr2) => {
// //   // const arr3 = [...arr, ...arr2]
// //   const arr3 = arr.concat(arr2);
// //   const arr5 = arr3.flat(3);

// //   let arr4 = arr5
// //     .filter((el, i) => {
// //       return arr5.indexOf(el) === i;
// //     })
// //     .sort((a, b) => {
// //       return a - b;
// //       // if (a > b) return 1;
// //       // if (b > a) return -1;
// //     });
// //   return arr4;
// // };

// // console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// // console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// // numbers = [10,20,10,40,50,60,70]
// // target = 50;
// // for (let i = 0; i < numbers.length; i++) {
// //     rest = target - numbers[i];
// //     const indexOf =  numbers.indexOf(rest)

// // }
// // console.log(sum);

// // function pairEl(num, targ){
// //     return num.filter((e,i)=> e)
// // }

// // ------------------------------
// // Cas vezbe --------------------
// // 1
// // function doubleNum(arr){
// //     return arr.map(e=> e * 2)
// // }
// // console.log(doubleNum([2,5,10]));

// // 2

// // function capitalizeNames(arr){
// //     return arr.map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase());

// // }
// // console.log(capitalizeNames(['John', 'JACOB']));
// // 3
// // function givemorefive(arr){
// // return arr.filter(el => el > 5)
// // }
// // console.log(givemorefive([3,6,8,2]));
// // -------------------------------
// // 4
// // function fiveCharter(arr){
// //     return arr.filter((arr,i)=> arr.length <= 5)

// // }
// // console.log(fiveCharter(['dog', 'wolf', 'sasass']));
// // 5

// // function stringConcat(arr){
// //     return arr.reduce((cur, el) => cur + String(el))

// // }
// // console.log(stringConcat([1,2,3]));
// // 6

// // ------------------------------
// // VEZBA
// // const dif1 = [1,2,3];
// // const dif2 = [100,2,1,1,10];

// // console.log(dif2.indexOf(1));

// // const array123 = [1,6,8,79,45,21,65,85,32,654];
// // const max1 = array123.reduce((op, item) => op = op > item ? op : item, 0);
// // console.log(max1);

// // let numArray = [140000, 104, 99];
// // numArray.sort(function(a, b) {
// //   if(a > b) return 1;
// //   if(b > a) return -1;
// // });

// // console.log(numArray);

// //JavaScript functions zadaci
// // Write a JavaScript function that reverse a number.
// // Example x = 32243;
// // Expected Output : 34223
// // 1 zadatak

// // const reverseNum = (num => {
// //     const obrnuti = String(num);
// //     return obrnuti.split('').reverse().join('');
// // })
// // console.log(reverseNum(123456));
// // ---------------------------------------------------

// // Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// // Example string : 'webmaster'
// // Expected Output : 'abeemrstw'
// // 2 zadatak

// // const alphaFun = function(str){
// // return str.split('').sort().join('');
// // }

// // console.log(alphaFun('webmaster'));

// // ---------------------------------------------------
// // ---------------------------------------------------

// // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// // Example string : 'the quick brown fox'
// // Expected Output : 'The Quick Brown Fox '
// // 3 zadatak

// // const velikoSlovo = function(str){
// //   const velikoPrvo = str.split(' ');
// //   const fristLetter = velikoPrvo.map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
// //   return fristLetter
// // }
// // console.log(velikoSlovo('the quick brown fox'));
// // ---------------------------------------------------
// // ---------------------------------------------------

// // Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// // Example string : 'Web Development Tutorial'
// // Expected Output : 'Development'
// // 4 zadatak

// // function longestWord(str){
// // str = str.split(' ');
// // let largest = '';

// // for (let i = 0; i < str.length; i++) {
// //   if(str[i].length > largest.length){
// //     largest = str[i]
// //     }
// //     return largest
// // }
// // }
// // console.log(longestWord('Web Development Tutorialsasasa'));

// // ---------------------------------------------------
// // ---------------------------------------------------
// // 4zadatak
// // function longestWord(str){
// //   str = str.split(' ');
// //   let maxLength = "";
// //   for (let i = 0; i < str.length; i++) {
// //     if(str[i].length > maxLength.length){
// //       maxLength = str[i];
// //     }
// //   }

// //   return maxLength;
// //   }
// //   console.log(longestWord('Webs Development Tutorial'));
// // ---------------------------------------------------
// // Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// // Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// // Click me to see the solution
// // 4zadatak
// // function accepts(type){
// //     return (typeof type)
// // }
// // console.log(accepts(4));
// // ---------------------------------------------------
// // ---------------------------------------------------
// // 6zadatak
// // Write a JavaScript function to extract unique characters from a string. Go to the editor
// // Example string : "thequickbrownfoxjumpsoverthelazydog"
// // Expected Output : "thequickbrownfxjmpsvlazydg"
// // function uniqueS(str){
// // uniq = '';
// // let str2 = str;
// // for (let i = 0; i < str2.length; i++) {
// //     if(str.indexOf(str2[i]) === i){
// //         uniq += str[i];
// //     };
// // }

// // return uniq
// // }

// // console.log(uniqueS("thequickbrownfoxjumpsoverthelazydog"));

// // ---------------------------------------------------
// // 7zadatak
// // Complete the solution so that the function will break up camel casing, using a space between words.

// // Example
// // "camelCasing"  =>  "camel Casing"
// // "identifier"   =>  "identifier"
// // ""             =>  ""

// // function solution(str){
// //     let newWord = '';

// //     for (let i = 0; i < str.length; i++) {
// //         if(str[i] !== str[i].toUpperCase()){
// //             newWord += str[i]
// //         }else if(str[i] === str[i].toUpperCase()){
// //             newWord += ' ' + str[i]
// //         }

// //     }
// //     return newWord
// // }

// // function solution(string) {
// //     string = string.split('').map(function (el) {
// //       if (el === el.toUpperCase()) {
// //         el = ' ' + el
// //       }
// //       return el
// //     })
// //     return string.join('')
// //   }
// // console.log(solution('camelCasing'));
// // console.log(solution('identifier'));
// // console.log(solution('identifierSuadFuad'));
// // ---------------------------------------------------
// // ---------------------------------------------------
// // 8zadatak

// // function jaden(){
// //     let emtpyS = [];
// //     let words = this.toLowerCase().split('');
// //     for (let i = 0; i < words.length; i++) {
// //     let word = words[i];
// //     emtpyS.push(word[0].toUpperCase() + word.slice(1));
// //     }
// //     return emtpyS.join(' ');
// // }
// // console.log(jaden('How can mirrors be real if our eyes arent rEal'));

// // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// // ---------------------------------------------------
// // ---------------------------------------------------
// // 9zadatak

// //   function isPangram(string){
// //         string = string.toLowerCase();
// //         let alfa = 'abcdefghijklmnopqrstuvwxyz';
// //        return alfa.split('').every((el, i) => {
// //             return string.indexOf(el) !== -1;
// //         })
// //     }

// //           console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// //             console.log(isPangram('This is not a pangram.'));
// // ---------------------------------------------------

// // Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// // Sample arguments : 'w3resource.com', 'o'
// // Expected output : 2
// // 11zadatak

// // function aceptTwo(str, val){
// //     let filed = 0
// //     for (let i = 0; i < str.length; i++) {
// //         if(str[i] === val){
// //             filed++;
// //         }

// //     }
// //     return filed;
// // }
// // console.log(aceptTwo('w3resorurcre.com', 'r'));

// // function aceptTwo(str, val){
// //     let filed = 0
// //     let noviS = str.split('');
// //     noviS.map((e) => {
// //         if(e === val){
// //             filed += 1
// //         }
// //     })
// //     return filed;
// // }
// // console.log(aceptTwo('w3resorurcre.com', 'r'));
// // ---------------------------------------------------
// // ---------------------------------------------------
// // 12zadatak

// // function rev(arr){
// // return arr.sort((a,b) => b - a)
// // }
// // console.log(rev([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
// //
// // ---------------------------------------------------
// // ---------------------------------------------------

// // Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
// // Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// // Expected output : "United States of America"

// const mostCountry = (arr) => {
//   return arr.reduce((prev, curr) => {
//     if (prev.length > curr.length) {
//       return prev;
//     } else {
//       return curr;
//     }
//   });
// };
// console.log(mostCountry(["Australia", "Germany", "United States of America"]));

// // // ---------------------------------------------------
// // ---------------------------------------------------
// // 13zadatak

// // function anagrams(word, words) {
// //     return words.filter(function(item){
// //         return item.split('').sort().join('') === word.split('').sort().join('');

// //     });
// //   }
// // console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// // ---------------------------------------------------
// // The marketing team is spending way too much time typing in hashtags.
// // Let's help them with our own Hashtag Generator!
// // Here's the deal:
// // 14zadatak

// // It must start with a hashtag (#).
// // All words must have their first letter capitalized.
// // If the final result is longer than 140 chars it must return false.
// // If the input or the result is an empty string it must return false.
// // Examples

// // const hashtags = (str => {
// //     if(str.length <= 0){
// //         return false
// //     }
// //     if(str[0] === ' '){
// //         return false
// //     }

// //     // let noviStr = '#' + str[0].toUpperCase() + str.slice(1).split(' ').join('');
// //     let noviStr = str.split(' ')
// //    const fuad = noviStr.map(arr => {
// //     return arr.charAt(0).toUpperCase() + arr.slice(1)
// //     }).join('');
// //     return fuad.length >= 140 ? false : '#' + fuad
// //     })
// // ---------------------------------------------------
// // ---------------------------------------------------
// // 14 zadatak

// // function hashtags(string) {
// //     if (string.trim() === '') return false;

// //     const stringWithCamelCase = string
// //       .split(' ')
// //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //       .join('');

// //     // const stringWithHashtag = `#${stringWithCamelCase}`;

// //     return stringWithCamelCase.length > 140 ? false : '#' + stringWithCamelCase;
// //   }

// // console.log(hashtags(''));
// // console.log(hashtags(' '.repeat(200)));
// // console.log(hashtags('do We have A Hashtag'));
// // console.log(hashtags("a".repeat(139)));
// // console.log(hashtags("a".repeat(140)));
// // console.log(hashtags('Codewars'));
// // console.log(hashtags('Codewars is Nice'));
// // console.log(hashtags("code" + " ".repeat(140) + "wars"));

// // ---------------------------------------------------
// // ---------------------------------------------------

// // ---------------------------------------------------
// // DOMAZI ZADATAK 30,31,36
// // ---------------------------------------------------
// // https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// // 30 - 31 - 36

// // domaci zadatak 30

// // Write a JavaScript function to merge two arrays and removes all duplicates elements. Go to the editor

// // Test data :
// // var array1 = [1, 2, 3];
// // var array2 = [2, 30, 1];
// // console.log(merge_array(array1, array2));
// // [3, 2, 30, 1]

// // function merge_array(arr1,arr2){
// //     // const arrayTogh1 = arr1.concat(arr2)
// //     const arr3 = [...arr1, ...arr2];
// //     return arr3.filter((el, i) => arr3.indexOf(el) === i)

// // }
// // console.log(merge_array(array1, array2));

// // domaci zadatak 31
// // Write a JavaScript function to remove a specific element from an array. Go to the editor

// // Test data :
// // [2, 9, 6]

// // function remove_array_element(arr, spec){
// //     return arr.filter((e) => e !== spec)
// // }

// // console.log(remove_array_element([2, 5, 9, 6], 5));

// // domaci zadatak 36

// // 36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

// // const array_filled = (filed, value) => {
// //     const arr1 = [];

// //     for (let i = 0; i < filed; i++) {
// //     arr1.push(value)
// //     }
// //     return arr1
// // }

// // console.log(array_filled(6, 0));
// // console.log(array_filled(4, 11));
// // ---------------------------------------------------
// // ---------------------------------------------------
// // ---------------------------------------------------
// // objekti zadaci conosle.log(object.keys(user))

// // 4

// // let library = [
// //     {
// //         author: 'Bill Gates',
// //         title: 'The Road Ahead',
// //         readingStatus: true
// //     },
// //     {

// //         author: 'Steve Jobs',
// //         title: 'Walter Isaascon',
// //         readingStatus: true
// //     },
// //     {
// //         author: 'Suzanne Collins',
// //         title: 'Mockingjay: The Final Book of The Hunger Games',
// //         readingStatus: false
// //     }

// // ];

// // library.forEach((e)=> {
// //     console.log(e.author);
// // })
// // console.log(library[0].readingStatus);

// // const nizOb = [
// //   { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
// //   { name: "Habanero Hillary", chickenwings: 20, hamburgers: 4, hotdogs: 11 },
// // ];

// // const scoreTable = {
// //   chickenwings: 5,
// //   hamburgers: 3,
// //   hotdogs: 2,
// // };

// // let score = 0;
// // nizOb.forEach(item => {
// // score = Object.keys(item).map((key)=>{

// //     if(scoreTable[key]) {
// // score += scoreTable[key] * item[key]
// //  }
// //  return score
// // })
// // })

// // console.log(score);

// // const arr = [];
// // nizOb.forEach((item) => {
// //   let scores = 0;
// //   let score = Object.keys(item).map((key) => {
// //     console.log(item[key]);
// //     if (scoreTable[key]) scores += scoreTable[key] * item[key];

// //     return scores;
// //   }, 0);
// //   arr.push({ name: item.name, scores });
// // });

// // console.log(arr);

// // // const resenje = nizOb.map((el) => {

// // //     return  {name: el.name, score: el.chickenwings * 5 + el.hamburgers * 3 + el.hotdogs * 2}
// // //   })

// // const resenje = nizOb.map((el) => {
// //   return  {name: el.name, score: el.chickenwings * 5 + el.hamburgers * 3 + el.hotdogs * 2}
// // })
// // console.log(resenje);
// // console.log(resenje);
// // function scoreboard(whoAteWhat){
// //     return whoAteWhat.map(obj => ({
// //       name: obj.name,
// //       score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
// //     })).sort((a, b) => b.score - a.score || a.name > b.name);
// //   }

// //   console.log(scoreboard(nizOb));

// // Dogy DayCare domaci zadatak

// // const dog = [{
// //   name: 'Spot',
// //   age: 23,
// //   labarator: 'lab',
// //   vaccinated: true,
// //   wormed: false
// // }]

// // const vakcinacija = dog.forEach((el)=>{
// // if(el.vaccinated && el.wormed){
// //   return `${el.name} can be accepted`;
// // // }else if(el.vaccinated || el.wormed){
// // //   return `${el.name} can only be accepted by itself`
// // // }else{
// // //   return `${el.name} can not be accepted`
// // }
// // return vakcinacija
// // })
// // console.log(vakcinacija);

// // ---
// // let novi = '';
// //  dog.forEach((el)=>{
// //   if(el.vaccinated && el.wormed){
// //     return novi = `${el.name} can be accepted`;
// //    }else if(el.vaccinated || el.wormed){
// //      return novi =`${el.name} can only be accepted by itself`
// //    }else{
// //      return novi = `${el.name} can not be accepted`
// //   }

// //   })
// //   console.log(novi);

// //--

// // Dog.prototype.checkDog = function() {
// //   if (this.vaccinated && this.wormed) return `${ this.name } can be accepted`;
// //   if (this.vaccinated || this.wormed) return `${ this.name } can only be accepted by itself`;
// //   return `${ this.name } can not be accepted`;
// // };

// // ------------------------------------------------------
// // ------------------------------------------------------
// // user2 = {...user, location: {...user.location}};
// // word = "abracadabra";
// // result = {};
// // console.log(word.split(""));

// // wordArr = word.split("");

// // wordArr.forEach((el) => {
// //   if (result[el]) {
// //     result[el] += 1;
// //   } else {
// //     result[el] = 1;
// //   }
// // });
// // console.log(result);
// // console.log(Object.entries(result));
// // // ------------------------------------------------------
// // ------------------------------------------------------
// // programiz.com/javascrpt/pbject

// // function objektiIsti(fristOb, secondObj){

// //   // fristOb.forEach((el)=>{

// //   // })
// //   Object.keys(fristOb).forEach((el)=>{
// //   }).
// //   // if(Object.keys(fristOb) === Object.keys(secondObj)) return true
// //   // else return false
// // }

// // medium.com object ket entries values
// // const data1 = {a: 1, b: 1};
// // const data2 = {a: 1, b: 1};
// // const data3 = {a: 1, b: 2};

// // console.log(objektiIsti(data1, data1));

// // ---- objekti
// scoreboard = players.map((player) => {
//   let playerpoints = 0;
//   Object.keys(points).forEach((key) => {
//     playerpoints += player[key] * points[key];
//   });

//   return { name: player.name, score: playerpoints };
// });

// console.log(scoreboard);

// // user = {
// //   lastName: "dupljak",
// //   password: "sfira123",
// //   location: {
// //     address: "NP",
// //     country: "SRB",
// //   },
// //   name: "dzemil",
// //   isLive: true,
// // };

// // user2 = {
// //   ...user,
// //   location: {
// //     ...user.location,
// //   },
// // };

// // user.lastName = "asdsadasd";
// // user.location.address = "NY";

// // // console.log(user);
// // // console.log("======================================");
// // // console.log(user2);

// // word = "abracadabra";

// // word = word.split("");

// // result = {};

// // word.forEach((letter) => {
// //   if (result[letter]) {
// //     result[letter] += 1;
// //   } else {
// //     result[letter] = 1;
// //   }
// // });

// // console.log(result);
// // console.log(Object.entries(result));

// // ["a", "b", "c", "d"];

// // a = {
// //   0: "a",
// //   1: "b",
// //   2: "c",
// //   3: "d",
// // };

// // user = ["Emir", 180, "Demir", 70, 2606005783944];

// // user = {
// //   name: "Emir",
// //   lastname: "Demir",
// //   height: 180,
// //   weight: 70,
// //   jmbg: 2606005783944,
// //   phoneNum: {
// //     personal: 123,
// //     home: 456,
// //     company: 444,
// //   },
// // };

// // console.log(user.name);

// // arr1 = { a: 1 };
// // arr2 = { a: 1 };
// // console.log(arr1 === arr2);

// // const data = { a: 1, b: 2 };
// // const data2 = { a: 1, b: 2 };

// // // // console.log(Object.keys(data));

// // res = Object.keys(data).every((key) => {
// //   data[key] === data2[key]
// // });
// // console.log(res);
// // if (Object.keys(data).length === Object.keys(data2).length && res) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }
// // ============================================================//
// // funkcija cas ==============================================//

// // mojaVar = 10;

// // function func1() {
// //   console.log("funckija radi");
// //   console.log("funckija radi");
// //   console.log("funckija radi");
// //   console.log("funckija radi");
// //   console.log("funckija radi");
// //   console.log(mojaVar);
// // }

// // func1();

// // export.func1 = func1;
// // const {func1} = require('/drugi_file');

// // function evenOdd(num){
// //   if(num % 2 === 0){
// //     return 'paran'
// //   }else{
// //     return 'neparan'
// //   }
// // }

// // console.log(evenOdd(223));

// // function func3(a, b){
// //   return a + b;
// // }

// // for (let i = 0; i < 3; i++) {

// //   console.log(func3(3,5));

// // }

// // ============================================================//
// // ============================================================//
// // domaci cas funckije
// // deklarisati funkcije za upis i ispis jednog niza
// // ============================================================//
// function upisArr() {
//   let prazan = [];
//     for (let i = 1; i <= 5; i++) {
//     unos = prompt(`Unesite vas ${i} element`);
//     prazan.push(unos);
//   }
//   return prazan;
// }
// console.log(upisArr());

// // ============================================================//
// // ============================================================//
// // === zdaci pracic////

// // var countSheep = function (num){
// //   //your code here
// //   result = ''
// //   for(let i =1; i<=num; i++){
// //     result += i + ' sheep..'
// //   }
// //   return result

// // }

// // console.log(countSheep(3));

// // function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
// //   // your code
// //   const godine = [age1, age2, age3, age4, age5, age6, age7, age8];

// //   const novo = godine.reduce((acc, curr) => acc + curr ** 2, 0)
// //   return Math.floor(novo ** 0.5 / 2);
// // }

// // console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
// // function last(x){

// // return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
// // }

// // console.log(last('take me to semynak'));
// // function scrollingText(text){
// // const word = text.toUpperCase();

// // return [...word].map((el, i)=> word.slice(i) + word.slice(0, i))
// // }

// // console.log(scrollingText("abc"));
// // // scrollingText("abc"), ["ABC","BCA","CAB"])
// // // // // === zdaci pracic////

// // function spacify(str) {

// //   return str.split('').join(' ');
// //   // return
// // }

// // console.log(spacify('hello world'));

// /// vezba codewars //
// // -------------------------
// // -------------------------

// const orderedCount = function (text) {
//   let obj = {};
//   text = text.split("");
//   text.forEach((el) => {
//     if (obj[el]) {
//       obj[el] += 1;
//     } else {
//       obj[el] = 1;
//     }
//   });
//   return Object.entries(obj);
// };

// console.log(orderedCount("abracadabra"));
// console.log(orderedCount("233312"));

// // -------------------------
// // -------------------------

// vezba sa sajtova
// ==================
// ==================
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

// function Longest_Country_Name(arr) {
//   let arr2 = arr.reduce((prev, curr) => {
//     if (prev.length > curr.length) {
//       return prev;
//     } else {
//       return curr;
//     }
//   });
//   return arr2;
// }

// console.log(
//   Longest_Country_Name(["Australia", "Germany", "United States of America"])
// );
// ==================
// ==================

// Funckije cas 2
// ----------------------------

// function removeDupl(arr){
// return arr.filter((el, i) => arr.indexOf(el) === i)
// }

// console.log(removeDupl([2,2,5]));
// function isDivisible(n, x,y){
//     return n % x === 0 && n % y === 0
// }

// console.log(isDivisible(12,3,4));
// console.log(isDivisible(12,3,7));
// function fakeBin(num){
//     const arr = num.split('');

//     const jedan = arr.map((el) => el >= 5 ? '1' : '0')
//     return jedan.join('')
// }

// console.log(fakeBin('45385593107843568'));

// -------------------------------
// function reverseWords(str){
// const str2 = str.split(' ');
// return str2.reverse().join(' ');
// // for (rec of arr2) {
// //     arr2.unshift(rec)
// // }
// // return arr.join(' ');
// }

// console.log(reverseWords('hello world!'));
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// leakcode

// function divisiblyBy(numbers, devisior){
// const novi = numbers.filter((el) => el % devisior === 0)
// return novi
// }
// console.log(divisiblyBy([1,2,3,4,5,6], 2));

// function boolToWord(bool){
// if(bool) return 'Yes'
// return 'No'
// }

// console.log(boolToWord(true));
// console.log(boolToWord(false));

// funnkcije cas kraj
// ----------------------------
// ---------------------------
// objekti
// ---------------------------

const noviUser = {
  ime: "Kemal",
  godiste: 1999,
  email: "kemalkujovic1111@gmail.com",
  zaispis: function () {
    console.log("radi");
  },
  interesovanja: [
    { naziv: "Pecanje", stepen: "7" },
    { naziv: "Slikarstvo", stepen: "4" },
    { naziv: "Programerstvo", stepen: "10" },
  ],
};

console.log(noviUser.interesovanja);

for (let i = 0; i < noviUser.interesovanja.length; i++) {
  console.log(i);
  if (noviUser.interesovanja[i].stepen > 5) {
    console.log(noviUser.interesovanja[i].naziv, "Ima veci od 5");
  }
}

// noviUser.forEach((element, i) => {
//   console.log(
//     element.interesovanja.filter((el, i) => {
//       return el.stepen > 5;
//     })
//   );
// });

// const objekat1 = {
//   ime: "Kemal",
//   god: 99,
//   godiste: 1999,
// };
// console.clear();
// for (let kljuc in objekat1) {
//   console.log(kljuc, ":", objekat1[kljuc]);
// }

// codewars
// Multiply Word in String
// console.clear();
// function modifyMultiply(str, loc, num) {
//   let arr = str.split(" ");
//   let dodati = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (loc === i) {
//       for (let j = 0; j < num; j++) {
//         dodati.push(arr[i]);
//       }
//     }
//   }
//   return dodati.join("-");
// }

// console.log(modifyMultiply("This is a string", 3, 5));

// codewarrs
// Multiply Word in string
// console.clear();
// function modifyMultiply(str, loc, num) {
//   let arr = str.split(" ");
//   let res = [];
//   let strres = "";
//   for (i = 0; i < num; i++) {
//     console.log(arr[loc]);
//     res.push(arr[loc]);
//     strres = res.join("-");
//   }
//   return strres;
// }

// console.log(modifyMultiply("This is a string", 3, 5));

// codewars
// Multiply Word in string
// console.clear();
// function modifyMultiply(str, i, n) {
//   console.log(Array(n).fill(str.split(" ")[i]).join("-"));
//   return Array(n).fill(str.split(" ")[i]).join("-");
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// console.clear();
// function findAverage(array) {
//   // return array.reduce((prev, curr) => prev + curr) / array.length;
//   if (array.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   array.reduce((prev, curr) => {
//     return (sum = prev + curr);
//   });
//   return sum / array.length;
// }
// console.log(findAverage([1, 1, 1]));
// console.log(findAverage([1, 2, 3, 4]));
// console.log(findAverage([]));
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// console.clear();
// codewars
// Who likes it
// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   }
//   let novi = names.join("");
//   if (names.length === 1) {
//     return novi + " likes this";
//   }
//   if (names.length === 2) {
//     return names.join(" and ") + " likes this";
//   }
//   if (names.length === 3) {
//     return names[0] + ", " + names.slice(1).join(" and ") + " likes this";
//   }
//   if (names.length > 3) {
//     return `${names[0]}, ${names.slice(1, 2)} and ${
//       names.length - 2
//     } others like this`;
//   }
// }
// // likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this'
// console.log(likes([]));
// console.log(likes(["Kemal"]));
// console.log(likes(["Kemal", "Fuad"]));
// console.log(likes(["Kemal", "Fuad", "Suad"]));
// console.log(likes(["Kemal", "Fuad", "Suad", "petar"]));
// console.log(likes(["Sukic", "Kemal", "Fuad", "Suad", "petar"]));
// codewards
// Stanton measure
// function stantonMeasure(arr) {
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count1++;
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === count1) {
//       count2++;
//     }
//   }
//   return count2;
// }

//----dom
// const naslov = document.getElementById('glavni')
// naslov.style.color = 'red'

// function glavnaF(){
// if(naslov.style.backgroundColor === 'yellow'){
//   naslov.style.backgroundColor = 'blue'
// }else{
//   naslov.style.backgroundColor = 'yellow'
// }

// }

// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
// codewars
// Simple Fun #176: Reverse Letter
// function reverseLetter(str) {
//   //coding and coding..
//   let rec = "";

//   for (let u = 0; u < str.length; u++) {
//     if (str[u] !== "?") {
//       rec += str[u];
//     }
//   }
//   return rec
//     .split("")
//     .reverse()
//     .join("")
//     .replace(/[^a-z]/gi, "");
// }

// console.log(reverseLetter("kemal"));
// console.log(reverseLetter("ke3m?al"));

// codewars
// function abbrevName(name) {
//   // code away
//   return name
//     .split(" ")

//     .map((el) => el[0])
//     .join(".")
//     .toUpperCase();
// }

// console.log(abbrevName("Kemal Kujovic"));
// console.log(abbrevName("kemal Kujovic

// function sum() {
//   let suma = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     suma += arguments[i];
//   }
//   return suma;
// }

// console.log(sum(1, 1, 1, 1, 1, 1, 1, 1));

// codewars
// Make acronym
// function toAcronym(inp) {
// return name
//   .join()
//   .split(" ")
//   .map((el) => el[0])
//   .join("")
//   .toUpperCase();
//   return inp
//     .split(" ")
//     .map((el) => el[0].toUpperCase())
//     .join("");
// }

// console.log(toAcronym("Code Wars"));

// codewars
// V A P O R C O D E
// function vaporcode(string) {
//   console.log(string.split(" ").join("").toUpperCase().split("").join("  "));
// }

// console.log(vaporcode("Lets go to movies"));
// console.log(vaporcode("Lets isn't to movies"));

// codewars
// Currying functions: multiply all elements in an array
// function multiply(arr) {
//   return function (num) {
//     return arr.map((el) => el * num);
//   };
// }

// console.log(multiply([1, 2, 3])(2));

// function sabiranje(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sabiranje(2)(5));

// codewars
// Mexican Wave
// console.clear();

// function wave(str) {
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       continue;
//     } else {
//       arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//     }
//   }
//   return arr;
// }

// console.log(wave("hello"));
// console.log(wave("two words"));
// console.log(wave(" gap "));

// codewars
// Array.diff
// function arrayDiff(arr1, arr2) {
//   return arr1.filter((el) => {
//     return !arr2.includes(el);
//   });
// }

// console.log(arrayDiff([1, 2], [1]));

// codewars
// Duplicate Encoder
// function duplicateEncode(word) {
//   const arr = word.toLowerCase().split("");
//   const novi = arr.map((el, i, array) => {
//     if (array.indexOf(el) === array.lastIndexOf(el)) {
//       return "(";
//     } else {
//       return ")";
//     }
//   });

//   return novi.join("");
// }
// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("success"));

// codewars
// Tribonacci Sequence
// function tribonacci(arr, num) {
//   let arr2 = [];
//   for (let i = 0; i < num; i++) {
//     if (i < 3) {
//       arr2.push(arr[i]);
//     } else {
//       arr2.push(arr2[i - 1] + arr2[i - 2] + arr2[i - 3]);
//     }
//   }
//   return arr2;
// }

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci([0, 0, 1], 10));
// console.clear();
// // codewars
// Vowel Count

// function getCount(str) {
//   let brojac = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "u" ||
//       str[i] === "o"
//     ) {
//       brojac += 1;
//     }
//   }
//   return brojac;
// }

// console.log(getCount("abracadabra"));

// codewars
// Highest and Lowest
// function highAndLow(numbers) {
//   let broj = numbers.split(" ");
//   let minBroj = Number(broj[0]);
//   let maxBroj = Number(broj[0]);
//   for (let i = 0; i < broj.length; i++) {
//     if (Number(broj[i]) > maxBroj) {
//       maxBroj = broj[i];
//     } else if (Number(broj[i]) < minBroj) {
//       minBroj = broj[i];
//     }
//   }
//   return `${maxBroj} ${minBroj}`;
// }

// // function highAndLow(numbers){
// //   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
// //   return arr[arr.length -1] + ' ' + arr[0];
// // }
// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// cas 9/20/2022

//   function modifyMultiply(str,loc,num){
//     let arr = str.split(' ');
//     let rec = [];

//     arr.forEach((el, index, array) => {
//         rec.push(arr[loc])
//     });
//     return rec.join('-');
// }
//   console.log(modifyMultiply('This is a string', 3,5));

// function stanton(argArr){
// let n = 0;
// let noviBr = 0;
// for (let i = 0; i < argArr.length; i++) {
//     if(argArr[i] === 1){
//         n++
//     }
// }
// for (let j = 0; j < argArr.length; j++) {
//     if(argArr[j] === n){
//         noviBr++;
//     }
//     }
// return noviBr
// }

// console.log(stanton([1,4,3,2,1,2,3,2]));

// function dayOfTheWeek(date){

// }

// console.log(dayOfTheWeek('21/07/2017'));

// function abName(name){
// return name.split(' ').map((el) => el.slice(0, 1).toUpperCase()).join('.')
// }

// console.log(abName('Kemal Kujovic'));
// codewars
// Day of the week.
// function dayOfTheWeek(date) {
//   return new Date(date.split("/").reverse().join("-")).toLocaleString("en-us", {
//     weekday: "long",
//   });
// }

// console.log(dayOfTheWeek("02/06/1940"));

// codewars
// Switcheroo

// function switcheroo(x) {
//   return x
//     .split("")
//     .map((el) => {
//       if (el === "a") {
//         return "b";
//       } else if (el === "b") {
//         return "a";
//       } else {
//         return el;
//       }
//     })
//     .join("");
// }

// randomm num and cha
// function generateWord(wordLen) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   const max = chars.length - 1;

//   let word = "";

//   for (let i = 0; i < wordLen; i++) {
//     radnIndex = Math.floor(Math.random() * max);
//     word += chars[radnIndex];
//   }

//   console.log(word);
// }

// generateWord(30);

// codewars
// Create phone number

// function createPhoneNumber(num) {
//   // returns "(123) 456-7890"
//   let prvaTri = num.filter((el, i) => i < 3);
//   prvaTri = `(${prvaTri.join("")}) `;
//   let drugaTri = num.filter((el, i) => i < 6 && i > 2);
//   drugaTri = `${drugaTri.join("")}-`;
//   let trecaCetri = num.filter((el, i) => i > 5 && i < num.length).join("");

//   return `${prvaTri}${drugaTri}${trecaCetri}`;
// }

// console.log(switcheroo("acb"));
// console.clear();

// codewars
// Likes or Dislakes
// function likeOrDislike(buttons) {
//   // ulazi u for, prvo postaje noth like posle dislike ako se ijedna javi ista sledeca ulazi u if i postaje nothing jer se ponavlja dva put.
//   let nothing = "Nothing";
//   for (let i = 0; i < buttons.length; i++) {
//     if (buttons[i] === nothing) {
//       nothing = "Nothing";
//     } else {
//       nothing = buttons[i];
//     }
//   }
//   return nothing;

// 2 nacin sa codewarsa return buttons.reduce( (state,button) => button===state ? Nothing : button , Nothing );

// }

// console.log(likeOrDislike(["Like", "Dislike", "Dislike"]));

// codewars
// You got change?

// function giveChange(amount) {
//   let arr = [0, 0, 0, 0, 0, 0];

//   while (amount >= 100) {
//     arr[5] += 1;
//     amount -= 100;
//   }
//   while (amount >= 50) {
//     arr[4]++;
//     amount -= 50;
//   }
//   while (amount >= 20) {
//     arr[3]++;
//     amount -= 20;
//   }
//   while (amount >= 10) {
//     arr[2]++;
//     amount -= 10;
//   }
//   while (amount >= 5) {
//     arr[1]++;
//     amount -= 5;
//   }
//   while (amount >= 1) {
//     arr[0]++;
//     amount -= 1;
//   }
//   return arr;
// }

// console.log(giveChange(365));

// codewars
// Find the odd int

// function findOdd(num) {
//   let result = 0;
//   let obj = {};
//   // prolazimo kroz niz
//   for (let i = 0; i < num.length; i++) {
//     // ako imamo vec taj broj dodajemo mu jedan
//     if (obj[num[i]]) {
//       obj[num[i]]++;
//       // ako nemamo broj dodajemo u objekat i dajemo mu value jedan.
//     } else {
//       obj[num[i]] = 1;
//     }
//   }
//   // prolazimo kroz objekat
//   for (let key in obj) {
//     // uzimamo vrednost od keyova i pitamo dali je modul od 2 jedan jedan tj. neparan.
//     console.log(key, obj);
//     if (obj[key] % 2 === 1) {
//       // ako jeste dodajemo mu u result taj key
//       result = key;
//     }
//   }
//   // jer svaki key je string moramo vratiti number
//   return Number(result);
// }

// console.log(findOdd([1, 1, 2]));
// // console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// codewars
// Disemvowel Trolls

// function disemvowel(str) {
//   let result = "";

//   for (i = 0; i < str.length; i++) {
//     // ako sadrzi koji bilo znak od 'aeiou' onda samo nastavi
//     if ("aeiou".includes(str[i].toLowerCase())) continue;
//     result += str[i];
//   }
//   return result;
// }

// console.log(disemvowel("This website is for losers LOL!"));
// codewars
// Disemvowel Trolls
// 2 nacin
// function disemvowel(str) {
//   let samoG = "aeiuo";
//   return str
//     .split("")
//     .filter((el) => !samoG.includes(el.toLowerCase()))
//     .join("");
// }
//
// console.log(disemvowel("This website is for losers LOL!"));
//
// codewars
// Descending Order
// function descendingOrder(n) {
//   //...
//   let str = String(n);

//   let order = str
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return Number(order);
// }

// console.log(descendingOrder(15));

// codewars
// Mumbling
// function accum(str) {
//   // your code
//   str = str.split("");
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let result = str[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       result += str[i].toLowerCase();
//     }
//     arr.push(result);
//   }
//   return arr.join("-");
// }

// console.log(accum("ZpglnRxqenU"));

// codewars
// Mumbling
// 2 nacin sa codewarsa

// function accum(str) {
//   return str
//     .split("")
//     .map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))
//     .join("-");
// }
// console.log(accum("acab"));

// codewars
// List Filtering
// function filter_list(list) {
//   // Return a new array with the strings filtered out

//   const noviArr = list.filter((el) => {
//     return typeof el == "number";
//   });
//   return noviArr;
// }
// return l.filter(e => Number.isInteger(e));
// console.log(filter_list([1, 2, "a", "b", 3]));

// codewars
// Isograms
// function isIsogram(str) {
//   let obj = {};
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isIsogram("aba"));

// codewars
// Isograms
// 2 nacin sa objektom
// function isIsogram(str) {
//   let obj = {};

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       return false;
//     } else {
//       obj[str[i]] = true;
//     }
//   }
//   return true;
// }
// console.log(isIsogram("aba"));

// codewars
// Exes and Ohs
// function XO(str) {
//   let numX = "";
//   let numO = "";
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "x") {
//       numX += str[i];
//     } else if (str[i] === "o") {
//       numO += str[i];
//     }
//   }
//   return numX.length === numO.length;
// }
// 2 nacin
// function XO(str) {
//   console.log(str.toLowerCase().split("x").length);
//   console.log(str.toLowerCase().split("o").length);
// }

// console.log(XO("ooxX"));

// codewars
// Exes and Ohs
// 3 nacin sa objektom
// function XO(str) {
//   let obj = { x: 0, o: 0 };
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "x") {
//       obj.x++;
//     }
//     if (str[i] === "o") {
//       obj.o++;
//     }
//   }
//   return obj.x === obj.o;
// }

// function XO(str) {
//   let obj = {};
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   console.log(obj);
//   console.log(obj.o === obj.x);
// }

// console.log(XO("ooxXxa"));

// codewars
// Shortest Word
// console.clear();
// function findShort(str) {
//   str = str.split(" ");
//   let minStr = str[0].length;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length < minStr) {
//       minStr = str[i].length;
//     }
//   }
//   return minStr;
// }

// console.log(findShort("Let's travel abroad shall we"));

// codewars
// Shortest Word
// 2 nacin
// function findShort(str) {
//   return str
//     .split(" ")
//     .map((el) => el.length)
//     .reduce((a, b) => Math.min(a, b));
// }
// console.log(findShort("Let's travel abroad shall we"));
// codewars
// Reverse words
// function reverseWords(str) {
//   // Go for
//   console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
// }
// // console.log(reverseWords("apple"));
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// codewars
// String ends with
// function solution(str, ending) {
//   console.log(str.endsWith("e"));
//   console.log(str.endsWith(ending));
// }
// console.log(solution("abcde", "cde"));
// codewars
// Sum of Digits / Digital Root
// function digitalRoot(num) {
//   const novi = String(num)
//     .split("")
//     .reduce((prev, curr) => {
//       return Number(prev) + Number(curr);
//     });
//   if (novi === "0") {
//     return 0;
//   }
//   if (novi === "10") {
//     return 1;
//   }
//   // ako je broj veci od 10 onda ponovi funkciju ako ne vrati taj broj
//   return novi >= 10 ? digitalRoot(novi) : novi;
// }

// console.log(digitalRoot(456));

// // codewars
// function anagrams(word, words){
//   let sort1 = word.split('').sort().join('')

//   return words.filter((el) => el.split('').sort().join('') === sort1)
// }

// console.log(anagrams('abba', ['aabb','abcd','bbaa','dada']));

// codewars
// Counting Duplicates
// function duplicateCount(str) {
//   let obj = {};
//   str = str.toLowerCase();
//   let brojac = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   for(let key in obj){
//     if(obj[key] > 1){
//       brojac++
//     }
//   }

//   return brojac;
// }

// // console.log(duplicateCount('abcde'));
// console.log(duplicateCount('Indivisibility'));
// codewars
// Count characters in your string

// function count(string) {
//   // The function code should be here
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log(count("aba"));

// // 2 nacin sa codewarsa
// function count (string) {
//   var obj = {};
//   string.split('').forEach(function(s) {
//      obj[s] ? obj[s]++ : obj[s] = 1;
//   });
//   return count;
// }

//codewars
// Object Oriented Piracy
// function Ship(draft, crew) {
//   this.draft = draft;
//   this.crew = crew;
// }

// Ship.prototype.isWorthIt = function () {
//   return this.draft - this.crew * 1.5 > 20;
// };

// let ship = new Ship(55, 3);
// console.log(ship.isWorthIt());

// codewars
// Count the smiley faces!
// function countSmileys(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let validS = [
//     ":)",
//     ";)",
//     ":D",
//     ";D",
//     ":-D",
//     ":~D",
//     ":-)",
//     ":~)",
//     ";~D",
//     ";~)",
//     ";-D",
//     ";-)",
//   ];
//   let brojac = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (validS.includes(arr[i])) {
//       brojac++;
//     }
//   }
//   return brojac;
// }

// console.log(countSmileys([":D", ":~)", ";~D", ":)"]));

// codewars
// Unique In Order
// let uniqueInOrder = function (iterable) {
//   let arr = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// codewars
// Sort the odd

// function sortArray(array) {
//   // Return a sorted array.
//   let oddArr = array.filter((el) => el % 2 === 1).sort((a, b) => a - b);
//   // neparni brojevi sortirani od najmanjeg do najveceg neparnog broja.
//   // el % 2 vazi isto samo vazi i za negativne brojeve
//   let all = array.map((el, i) => {
//     if (el % 2 === 1) {
//       // shift uzima svkaki prvi element i brise ga
//       return oddArr.shift();
//     } else {
//       return el;
//     }
//   });
//   return all;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// codewars
// Moving Zeros To The End
// const moveZeros = function (arr) {
//   const arrNule = arr.filter((el) => el === 0);
//   let bezNule = arr.filter((el) => el !== 0);

//   arrNule.forEach((el) => {
//     bezNule.push(el);
//   });
//   return bezNule;
// };
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// console.clear();
// codewars
// Multiples of 3 or 5
// function solution(num) {
//   let arr = [];
//   for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr.reduce((a, b) => a + b, 0);
// }
// console.log(solution(10));

// codewars
// Stop gninnipS My sdroW!
// function spinWords(string) {
//   string = string.split(" ").map((el, i) => {
//     if (el.length >= 5) {
//       return el.split("").reverse().join("");
//     } else {
//       return el;
//     }
//   });

//   return string.join(" ");
// }
// console.log(spinWords("Hey fellow warriors"));

// codewars
// Create Phone Number
// function createPhoneNumber(num) {
//   // returns "(123) 456-7890"
//   num = num.join("");

//   return `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6, num.length)}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// codewars
// Convert string to camel case
// splice
// function toCamelCase(str) {
//   str = str.split("");
//   return str
//     .map((el, i) => {
//       if (el === "-" || el === "_") {
//         el = str[i + 1].toUpperCase();
//         str.splice(i + 1, 1);
//       }
//       return el;
//     })
//     .join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("the_stealth_warrior"));

// codewars
// Simple Pig Latin

// function pigIt(s) {
//   return s
//     .split(" ")
//     .map((e, i) => {
//       if (e[0] === "!" || e[0] === "?") {
//         return e;
//       } else {
//         return e.slice(1) + e[0] + "ay";
//       }
//     })
//     .join(" ");
// }

// console.log(pigIt("Hello !oy World")); // elloHay // oy!ay

// codewars
// pete, the baker
// function cakes(recipe, available) {
//   let br;

//   for (let key in recipe) {
//     if (available[key]) {
//       const noviRecp = Math.floor(available[key] / recipe[key]) || 0;

//       if (!br || noviRecp < br) {
//         br = noviRecp;
//       }
//     } // else {
//       return 0;
//     }
//   }
//   return br;
// }
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );
// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );

// codewars
// Find The Parity Outlier
// function findOutlier(integers){
//   const oddArray = [];
//   const evenArray = [];
//   for (let integer of integers) {
//     if (integer % 2 === 0) {
//       evenArray.push(integer);
//     } else {
//       oddArray.push(integer);
//     }
//   }
//   return oddArray.length === 1 ? oddArray[0] : evenArray[0];
// }

// console.log(findOutlier([0,1,2]));
// console.log(findOutlier([1,2,3]));

// codewars
// Remove the minimum
// console.clear();
// function removeSmallest(numbers) {
//   let najmanjeg = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < najmanjeg) {
//       najmanjeg = numbers[i];
//     }
//   }
//   return numbers.filter((el, i) => numbers.indexOf(najmanjeg) !== i);
// }

// console.log(removeSmallest([2, 2, 1, 2, 1]));
// codewars
// Sum of Intervals
// function sumIntervals(intervals) {
//   let obj = {};
//   intervals.forEach((el) => {
//     for (let i = el[0]; i < el[1]; i++) {
//       console.log(i);
//       obj[i] = i;
//     }
//   });
//   return Object.values(obj).length;
// }

// function sumIntervals(intervals) {
//   let arr = [];
//   intervals.forEach((el) => {
//     for (let i = el[0]; i < el[1]; i++) {
//       arr.push(i);
//     }
//   });
//   return arr.length;
// }

// console.log(
//   sumIntervals([
//     [1, 5],
//     [5, 9],
//   ])
// );

// sta je internet

// 1 ench zatvaranje pristupa varijablama  #privatno kad oznacimo sa #
// 2 nasledjivanje inherice
// 3. Polomophism abstract ne moze da se pravi new object a kad nasledi child clasu moze se praviti sve normalno
// 4 inhertiance poly nasledjuje ali ako ima istu metodu,funck ona gazi od roditelja i slusa sebe
//http je mrezni protokol komunkacije izmedju servera i vas
//https - razlika izmedju http i https koja je mnogo sigurnija
// internet znaci mreza unutar mreze , internet je globalni sistem,
// dns se koristi da ne bi morali da ulazimo preko ip adrese vec nam omugcava da koristimo slova, zatim kad posaljemo zahtev te stranice, on nadje ip adresu vrati ip adresu i ta ip adresa se salje ko zahtev za ulazak na tu stranicu na primer.
// tcp se deli vise na paketa(delova) pre prezuimanju se opet spaja, tcp ima ologu pravilo skapalnja paketa, pregled gresaka, i pokazuju gresku (ako postoji)
// osi model se sastoji od 7 slojeva.
// 1. Fizicki sloj, 2. Sloj veze. 3. mrezni sloj. 4. Transportni sloj. 5.Sloj sesije. 6.Sloj prezentacije. 7.Aplikativni sloj

// garden.bradwoods.io/blueprints/js-engine/basic
// call-stack str podataka

// myFilter = function (argArr, clb) {
//   let noviArr = [];

//   for (let i = 0; i < argArr.length; i++) {
//     let newEl = clb(argArr[i]);
//     if (newEl) {
//       noviArr.push(newEl);
//     }

//   }
//   return noviArr;
// };

// let arr = [1, 2, 3, 4, 5, 6];

// let arr2 = myFilter(arr, function (el) {
//   if (el > 4) {
//     return el;
//   }
// });

// console.log(arr2);
// console.clear()
// // -=============
// // reduce custom
// myReduce = function (argArr, callBack) {
//   let firstNum = 0;

//   for (let i = 0; i < argArr.length; i++) {
//     let newEl = callBack((firstNum = firstNum + argArr[i]));
//   }
//   return firstNum;
// };

// const arr = [1, 2, 3, 4, 5, 6];

// let arr2 = myReduce(arr, function (curr) {
//   return curr;
// });
// console.log(arr2);

// napisati program koji uzima 1000prvih prirodnih brojeva (n=1....1000) i u kom se glavnom telu  poziva funckija kojom se izdvajaju parni brojevi
// i racuna ukupan zbir njihovih kvadrata, posle cega se ovaj zbir stampa na ekran
// console.clear();
// function brojevi(num) {
//   let n = "";
//   let sumZbir = 0;
//   for (let i = 0; i < num; i++) {
//     if (i % 2 === 0) {
//         // n = i ** 2
//       n = Math.pow(i, 2);
//       sumZbir += n;
//     }
//   }
//   return sumZbir;
// }

// console.log(brojevi(1000));
// deathzone temporal

// jsv9000
// console.clear();
class personal {
  constructor(nickname, lastName) {
    this.nickname = nickname;
    this.lastName = lastName;
  }
}
const novi = new personal("Legi", "Kemal");
console.log(novi);
// clousre
// nasledjivanjee
// class Nurse extends Person{
// super(nickname, lastname)
// }
// 1 ench zatvaranje pristupa varijablama  #privatno kad oznacimo sa #
// 2 nasledjivanje inherice
// 3. Polomophism abstract ne moze da se pravi new object a kad nasledi child clasu moze se praviti sve normalno
// 4 inhertiance poly nasledjuje ali ako ima istu metodu,funck ona gazi od roditelja i slusa sebe

// ashync
// console.clear();

// function nextBigger(n){

//   let broj =  Number(n.toString().split('').sort((a,b) => a - b).join(''))
// }

// console.log(nextBigger(12));

// function nextBigger(n) {
//   const sortedDigits = n => ('' + n).split('').sort((a, b) => b - a)
//   const max = +sortedDigits(n).join('')
//   console.log(max);
//   for (let i = n + 1; i <= max; i++) {
//     if (max === +sortedDigits(i).join('')) return i
//   }
//   return -1
// }

// console.log(nextBigger(12));
// catfacts
// sta je http i https
// async
// fetch("https://catfact.ninja/facts")
//   .then((res) => {
//     res.json().then((res) => {
//       let arr = res.data;
//       let maks = 0;
//       for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element.length > maks) {
//           maks = element.length;
//         }
//       }
//       fact = res.data.find((el) => el.length === maks);
//       console.log(maks);
//       console.log(fact);
//     });
//   })
//   .catch((err) => {
//     // console.log('ne radi', err);
//   });

// sta je internet, https, http tcpi udpb  dns osi ip

// Two fighters,, one winner..
// console.clear();
// function declareWinner(fighter1, fighter2, firstAttacker) {
//   const figh1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
//   const figh2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

//   if (figh1 < figh2) {
//     return fighter2.name;
//   } else if (figh2 < figh1) {
//     return fighter1.name;
//   } else {
//     return firstAttacker;
//   }
///=/ }

// function Fighter(name, health, damagePerAttack) {
//   this.name = name;
//   this.health = health;
//   this.damagePerAttack = damagePerAttack;
//   this.toString = function () {
//     return this.name;
//   };
// }

// console.log(
//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 6, 4), "Lew")
// );

// garden.bardwoods.io
// ashync callbackom i promiss (funkcije)

// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// let facts = null;
// getDate = fetch("https://catfact.ninja/facts");

// getDate
//   .then((response) => {
//     return response.json();
//   })
//   .then((commits) => {
//     facts = commits.data;
//     facts.forEach(element => {
//       console.log(element.fact  );
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// class Car {
//   constructor(n, y) {
//     this.name = n;
//     this.year = y;
//     this.calcAge = 2022 - y;
//   }
// }

// const myCar = new Car("Ford", 2014);

// console.log(myCar);

// const secondCar = new Car("Mercedes", 2020);

// console.log(secondCar);

// mojaVar = { name: "dzemil" };

// console.log(myCar);
// console.log(mojaVar);

// var asdasda = Number("1");

// class Person {
//   constructor(nickname, favUtensil) {
//     this.nickname = nickname;
//     this.favUtensil = favUtensil;
//   }

//   eatsCereal() {
//     return `${this.nickname} eats cereal with ${this.favUtensil}`;
//   }

//   operate() {
//     return "umm, I am not a doctor. I don't do this.";
//   }
// }

// mojaVar = new Person("dzemil", "pan");
// result = mojaVar.eatsCereal();
// console.log(result);

// mojaVar2 = new Person("drugo", "serpa");
// result2 = mojaVar2.eatsCereal();
// console.log(result2);

// class Person {
//   constructor(nickname, favUtensil) {
//     this.nickname = nickname;
//     this.favUtensil = favUtensil;
//     throw new Error("FYI: Instance of Abstract class cannot be instantiated");
//   }

//   eatsCereal() {
//     return `${this.nickname} eats cereal with ${this.favUtensil}`;
//   }

//   operate() {
//     console.log(
//       "umm, I am not a doctor. I don't do this. ===================="
//     );
//   }
// }

// class Doctor extends Person {
//   constructor(nickname, favUtensil, name, color, specialty) {
//     //super passes down attributes from super class, in this case from Person
//     super(nickname, favUtensil);
//     this.name = name;
//     this.scrubs = color;
//     this.specialty = specialty;
//   }

//   medicalLicense() {
//     console.log(`${this.name}, ${this.specialty}`);
//   }
// }

// class Nurse extends Person {
//   #nurseName;
//   #jmbg;
//   constructor(nickname, favUtensil, name, jmbg) {
//     //super passes down attributes from super class,
//     //in this case from Person
//     super(nickname, favUtensil);
//     this.#jmbg = jmbg;
//     this.#nurseName = name + this.#jmbg;
//   }

//   medicalLicense() {
//     console.log(`${this.#nurseName}, nurse`);
//   }

//   getJmbg() {
//     console.log(this.#jmbg);
//     return this.#jmbg;
//   }
//   setJmbg(val) {
//     this.#jmbg = val;
//   }
// }

// dr = new Doctor("dzd", "pan", "dzemil", "white", "neuro");
// dr.medicalLicense();
// dr.operate();

// nr = new Nurse("smr", "glass", "samra", 123123123213);
// nr.operate();
// nr.medicalLicense();
// console.log(nr.nurseName);

// nr.getJmbg();

// class firstClass {
//   constructor(arg1) {
//     this.prop1 = arg1;
//     this.prop2 = "dzemil";
//   }
//   add() {
//     console.log("First Method");
//   }
// }
// class secondClass extends firstClass {
//   add(val) {
//     console.log(30 + 40, val);
//   }
//   add(val, val2) {
//     console.log(30 + 40, val, val2);
//   }
// }

// var ob = new firstClass("dupljak");
// var ob2 = new firstClass("dupljak", "dzemil");

// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// var C1 = class {
//   constructor() {
//     console.log("asdasd");
//   }
// };
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");
// console.log("nekidok");

// c1 = new C1();

// function nextBigger(n) {
//   console.log(n);
//   console.log("-------------");
//   digits = n
//     .toString()
//     .split("")
//     .map((d) => Number(d));
//   if (digits[digits.length - 1] === 0) {
//     debugger;
//     digits.splice(digits.length - 1, 1);
//     digits.splice(digits.length - 1, 0, 0);
//     let resultNum = Number(digits.join(""));
//     return resultNum;
//   }
//   for (let i = digits.length - 1; i >= 0; i--) {
//     const digit = digits[i];

//     for (let j = i - 1; j >= 0; j--) {
//       const d = digits[j];
//       if (digit > d) {
//         let tmp = digit;

//         digits.splice(i, 1);
//         digits.splice(j, 0, tmp);
//         let resultNum = Number(digits.join(""));
//         console.log(resultNum);
//         // if (resultNum > n) return resultNum;
//       }
//     }
//   }
//   if (Number(digits.join("")) > n) return Number(digits.join(""));
//   return -1;
// }

// result = nextBigger(398653);
// console.log(result);

// result = nextBigger(3999854432);
// console.log(3999854432, result, 4233458999, "--------------");

// result = nextBigger(1234567980);
// console.log(result);

// request = {
//   header: {
//     host: "localhost:3000",
//     remote: "my-app.com/user/",
//     method: "GET",
//     accept: "application/json, text/plain, */*",
//   },
// };

// response = {
//   header: {
//     host: "localhost:3000",
//     remote: "google.com/user",
//     status: 201,
//     accept: "application/json, text/plain, */*",
//   },
//   body: {
//     error: 'no user with this id'
//   },
// };

// mojafUNc = () => {
//   console.log("moja func");
// };

// setTimeout(mojafUNc, 100);

// setTimeout(() => {
//   console.log("drugi posao");
// }, 100);

// mojPosao = new Promise((res, rej) => {
//   responseStatus = 200;

//   if (responseStatus === 200) {
//     res("Uspensno zavrsen posao");
//   } else {
//     rej("failed to fetch");
//   }
// });
// ///
// promise

// mojPosao
//   .then((result) => {
//     console.log("USPESNO");
//     console.log(result);
//     return "value!!!";
//   })
//   .catch((err) => {
//     console.log("GRESKAAA", err);
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("FINALY");
//   });

// fetch(
//   "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
// )
//   .then((response) => response.json())
//   .then((commits) => {
//     console.log(commits);
//   });

// mojPosao = new Promise((resolve, reject) => {
//   responseStatus = 400;

//   for (let i = 0; i < 900000000; i++) {}

////   if (responseStatus === 200) {
//     resolve("Uspensno zavrsen posao");
//   } else {
//     reject("failed to fetch");
//   }
// });

// mojPosao
//   .then((result) => {
//     console.log("USPESNO");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("GRESKAAA", err);
//   });

// myUrl = `https://catfact.ninja/facts?page=${1}`;

// pageNum = Number(prompt("Unesite stranu"));
// myUrl = `https://catfact.ninja/facts?page=${pageNum}`;

// fetch(myUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((responseBody) => {
//     console.log(responseBody);
//     data = responseBody;
//   })
//   .catch((err) => {
//     console.log("GRESKAAA", err);
////   });
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// codewars invert
// function invert(arr) {
//   let myArr = [];
//   arr.forEach((el) => {
//     if (el >= 0) {
//       myArr.push(-el);
//     } else {
//       myArr.push(-el);
//     }
//   });
// //   return myArr;
// // }

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([99, 1, -2, 3, -4, 5]));
// You can assume that all values are integers. Do not mutate the input array/list.
// codewars 4 key
// function uniqueInOrder(arr) {
//   console.log(noviArr);
//   let konacniArr = [];
//   for (let i = 0; i < noviArr.length; i++) {
//     if (noviArr[i] !== noviArr[i + 1]) {
//       konacniArr.push(noviArr[i]);
//     }
//   }
//   return konacniArr;
// }
// console.log(uniqueInOrder("aaaaaabbbbbcccccddddee"));

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// const res = await axios(BASE_URL);
// //

// const fetching = async () => {
//   try {
//     const resData = await axios.get(
//       "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
//     );
//     radimones(resData.data.Style);
//     radimones2(resData.data.Video);
//   } catch (error) {}
// };
// fetching();

// function radimones(data) {
//   console.log(data);
// }
// function radimones2(data) {
//   data.forEach((element) => {
//     console.log(element);
//   });
// }
// radimones();
// radimones2();

fetch("https://api.football-data.org/v4/matches", {
  headers: {
    "X-Auth-Token": "32ba4893f70643fdaf5885ae3d985ba8",
    "Content-type": "application/json",
  },
})
  .then((data) => data.json())
  .then((data) => console.log(data));
