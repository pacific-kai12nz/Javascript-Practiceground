var car = [
    {type: '軽自動車', price:'安い'},
    {type: '高級自動車', price:'高い'}
];

var prices = car.map(function(car) {
    return car.price;
});

prices;