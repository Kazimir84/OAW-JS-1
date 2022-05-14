// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;

let s = height * width;

let pSquare = document.querySelectorAll('.square');
let resSquare = document.createElement('div');
    resSquare.innerHTML = `<p>Square = ${s} см<sup>2</sup></p>`;
    pSquare[0].append(resSquare);
// document.write(`5. Square = ${s} см<sup>2</sup>`);
// console.log(`5. Square = ${s} см2`);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;

let v = heightC * Math.PI * ((Math.pow(dC, 2))/4);

let pVolume = document.querySelectorAll('.volume');
let resVolume = document.createElement('div');
    resVolume.innerHTML = `<p>Volume = ${v} м<sup>3</sup></p>`;
    pVolume[0].append(resVolume);
// document.write(`6. Volume = ${v} м<sup>3</sup>`);
// console.log(`6. Volume = ${v} м3`);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або
// оператор зведення в ступінь **).

let n = 3;
let m = 4;

let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

let pHypotenuse = document.querySelectorAll('.hypotenuse');
let resHypotenuse = document.createElement('div');
    resHypotenuse.innerHTML = `<p>Hypotenuse = ${k}`;
    pHypotenuse[0].append(resHypotenuse);
// document.write(`7. Hypotenuse = ${k}`);
// console.log(`7. Hypotenuse = ${k}`);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// console.log (5 < 6) -> true
// console.log (5 == 6) -> false
// console.log (5 > 6) -> false
// console.log (5 ===! 6) -> false
// console.log (10 === 10) -> true
// console.log (10 >= 10) -> true
// console.log (10 > 10)  -> false
// console.log (10 !== 10) -> false
// console.log (10 != 10) -> false
// console.log (123 === '123') -> false
// console.log (123 == '123') -> true