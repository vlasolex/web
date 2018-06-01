
/*
var count = prompt('Введете количество елементов масива');
var arr = [];
var a = '';

// jscs:disable
for (var i = 0; i < count; i++) {
    a = 'arr' + (i + 1);
    arr.push(a);
}

// jscs:enable
arr.reverse();
document.write(arr.join('<br>'));
*/

var count = prompt('Введете количество елементов масива');
var arr = [];
var numb = 0;

for (var i = 0; i < count; i++) {
    numb = prompt('Введете ' + (i + 1) + ' элемент массива');
    arr[i] = +numb;
}

var a = arr[0];
var b = arr[0];
var c = arr[0];
var d = arr[0];
var arr2 = [];

//document.write(arr.join('<br>'));
//document.write('<br>' + typeof (a) + '<br>');

document.write('<br><br>Вы создали массив с ' + arr.length + ' элементов');
document.write('<br><br>Заданный Вами массив: ' + arr.join(' | '));

for (var i = 1; i < arr.length; i++) {
    c = c + arr[i];
    if (arr[i] >= a) {
        a = arr[i];
    } else if (arr[i] <= a) {
        b = arr[i];

    } else if (arr[(i - 1)] % 2 != 0) {
    arr2.push(arr[(i - 1)]);
    }
}

document.write('<br><br><b>Cума всех елементов массива:</b> ' + c);
c = c / arr.length;
document.write('<br><br><b>Среднее арифметическое всех елементов массива:</b> ' + c);
document.write('<br><br><b>Найбольшое число массива:</b> ' + a);
document.write('<br><br><b>Найменьшее число массива:</b> ' + b);

//for (var i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 != 0) {
//    arr2.push(arr[i]);
//    document.write(arr.join('<br>'));
//    }
//}

document.write('<br><br><b>Нечетные числа массива:</b> ' + arr2.join(' | '));
