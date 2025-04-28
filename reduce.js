var unmbers = [10, 20, 30]; 
var sum = 0;

for(var i =0; i < numbers.length; i++) {
    sum += numbers[i];
}

numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

var numbers = [10, 20, 30]; 
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log('for文の合計:', sum);

var total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log('reduceの合計:', total);