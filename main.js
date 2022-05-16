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
// console.log (5 === 6) -> false
// console.log (10 === 10) -> true
// console.log (10 >= 10) -> true
// console.log (10 > 10)  -> false
// console.log (10 !== 10) -> false
// console.log (10 != 10) -> false
// console.log (123 === '123') -> false
// console.log (123 == '123') -> true

// Рекурсия!!!. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.
// Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
// Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?
// -------------------------------
// function isEven(x) {
//     if( x < 0) {
//         x = Math.abs(x);
//     } if (x === 0) {
//         return true;
//     } if (x === 1) {
//         return false;
//     } else {
//         x = x - 2;
//         return isEven(x);
//     }
// }
// console.log('Res', isEven(-1));
// -------------------------------

// Треугольник. Напишите цикл, который выводит такой треугольник:
// 1#
// 2##
// 3###
// 4####
// 5#####
// 6######
// 7#######
// -------------------------------
// let str = "#";
// while (str.length<=7){
//     console.log(str);
//     str+="#";
// };
// -------------------------------

// FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
// -------------------------------
// for (let i = 1; i <= 100; i++) {
//     if(i%3 === 0) {
//         console.log('Fizz');
//     } else if(i%5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log('I',i);
//     };
// };
// -------------------------------
// for (let i = 1; i <= 100; i++) {
//     if(i%3 === 0 || i%5 === 0) {
//         console.log('FizzBuzz');
//     } else {
//         console.log('I',i);
//     };
// };
// -------------------------------

// Шахматная доска.
//  Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
//  На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// -------------------------------
// let result = "\n";
//
// for (let row = 1; row <= 8; row++) {
//     for (let cell = 1; cell <= 8; cell++) {
//         result += (row % 2 === cell % 2) ? "#" : " "; //Можно еще побитово - (row & 1 == cell & 1)
//     };
//     result += "\n";
// };
//
// console.log(result);
// -------------------------------

// Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10
// -------------------------------
// let x = prompt('Enter first number', 0);
// let y = prompt('Enter second namber', 0);
// function min(x, y) {
//     if(x<y) {
//         return x;
//     } else if (y<x) {
//         return y;
//     } else {
//         return 'They are the same';
//     }
// }
// alert(`Min = ${min(x,y)}`);
// -------------------------------

// Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N)
// ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length.
// Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”).
// У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1.
// Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
// Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”,
// содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs,
// только принимает второй параметр — символ, который мы будем искать в строке
// (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.
// -------------------------------
// let res = ' '
// let str = prompt('Укажите слово, в котором будем считать буквы', );
// let N = prompt('Укажите букву, колличество которых нужно найти в слове.', );
//
// function countBs(str) {
//     for (let i = 0; i <= str.length; i++) {
//         let count = str.charAt(i);
//         if (count === N) {
//             res += count;
//         };
//     };
// };
// countBs(str);
// alert(`Колличество букв '${N}' в слове '${str}' = ${res.length-1}`);

// let leters = '';
// let word = 'Helloll';
// let fLeter = 'l'
// function countChar(word, fLeter) {
//     for (let i = 0; i <= word.length-1; i++) {
//         let leter = word.charAt(i);
//         if (leter === fLeter) {
//             leters += leter;
//         };
//     };
// };
// countChar(word, fLeter);
// console.log('Finded leters:', leters);
// -------------------------------

// Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона,
// и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
// Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
// В качестве бонуса дополните функцию range, чтобы она могла принимать
// необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице.
// Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
// Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// -------------------------------
// function range(start,end,step=1) {
//     let resault = [];
//     if (step < 0 && start > end) {
//             while (start >= end) {
//                 console.log(start);
//                 resault.push(start);
//                 start += (step);
//             };
//     } else if (step > 0 && start > end) {
//             while (start >= end) {
//                 console.log(start);
//                 resault.push(start);
//                 start -= (step);
//             };
//     } else if (step > 0 && start < end) {
//         while (start <= end) {
//             console.log(start);
//             resault.push(start);
//             start += (step);
//         };
//     } else if (step < 0 && start < end) {
//         while (end >= start) {
//             console.log(end);
//             resault.push(end);
//             end += (step);
//         };
//     };
//     console.log('Resault',resault);
//     let sum = resault.reduce(function (previousValue, currentValue) {
//         return previousValue + currentValue;
//     });
//     console.log('Sum = ', sum);
// };
// range(1, 10, 2) // → [1, 3, 5, 7, 9] → sum = 25;
// console.log('---');
// range(5, 2, -1) // → [5, 4, 3, 2] → sum = 14;
// console.log('---');
// range(1, 10, ) // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] → sum = 55;
// console.log('---');
// -------------------------------

// Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace.
//  Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
//  Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
//  который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
// -------------------------------
// let arr = ["A", "B", "C"];
// console.log('Basic Array', arr);
// let revArray = [];
// function reverseArray (arr) {
//     return  revArray = arr.reverse();
// }
// console.log('Revers Array', reverseArray(arr));
//
// let reverArray = [];
// function reverseArrayInPlace (revArray) {
//     for (let i = 0; i < revArray.length; i++) {
//         let revArrayElement = revArray[i];
//         reverArray.unshift(revArrayElement);
//     };
// };
// reverseArrayInPlace(revArray);
// console.log('Reverse Array In Place', reverArray);
// -------------------------------

// Список.Объекты могут быть использованы для построения различных структур данных.
// Часто встречающаяся структура – список (не путайте с массивом).
// Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };
// Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два
// списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную.
// Это два независимых списка, при этом у них есть общая структура list, которая включает три последних
// элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как
// отдельный список из трёх элементов.
// Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также
// функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая
// получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth,
// которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке,
// или же undefined в случае отсутствия такого элемента.

// Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
// -------------------------------
// let list = {};
// function arrayToList(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         list.value = arr[0];
//         list.rest = {};
//         if (arr[1]) {
//             list.rest.value = arr[1];
//         } else {
//             list.rest.value = null;
//         }
//         if (arr[2]) {
//             list.rest.rest = arr[2];
//         } else {
//         list.rest.rest = null;
//         }
//     }
// }
// arrayToList([10, 20]) // → {value: 10, rest: {value: 20, rest: null}}
// console.log('List', list);
// -------------------------------

// Глубокое сравнение. Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
// Но иногда полезно было бы сравнить объекты по содержимому.
// Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это
// два одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их
// сравнивать рекурсивным вызовом deepEqual.Чтобы узнать, когда сравнивать величины через ===, а когда – объекты
// по содержимому, используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно
// делать глубокое сравнение. Не забудьте об одном дурацком исключении, случившемся из-за
// исторических причин: “typeof null” тоже возвращает “object”.
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// -------------------------------
let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "an"}, object: 2};
let res = '';
function clearRes() {
    if (res === false || res === true) {
        res = '';
    };
}
function deepEqual(a, b) {
    for (let aKey in a) {
        for (let bKey in b) {
            if (typeof a[aKey] === 'object' || typeof b[bKey] === 'object') {
                deepEqual(a[aKey], b[bKey]);
            } else if (a[aKey] !== null && b[bKey] !== null && a[aKey] !== b[bKey]) {
                res = false;
            };
            if (res === false) {
                if (res === false || res === true) {
                    res = '';
                };
                res = false;
            } else {
                res = true;
            };
        };
    };
};

deepEqual(obj, obj); // → true
console.log('Res1', res);
clearRes();
console.log('---');

deepEqual(obj, {here: {is: "an"}, object: 2}); // → true
console.log('Res2', res);
clearRes();
console.log('---');

deepEqual(obj, {here: 1, object: 2}); // → false
console.log('Res3', res);
clearRes();
console.log('---');

deepEqual(obj, {here: {is: "an"}, object: 2}); // → true
console.log('Res4', res);
clearRes();
console.log('---');

deepEqual(obj, obj2); // → true
console.log('Res5', res);
clearRes();
console.log('---');
// -------------------------------
