var allComputersCanRun = true;
var allComputersCanRun = false;

for(var i = 0; i < allComputersCanRun.length; i++) {
    var computer = computers[i];

    if(computer.ram < 16) {
        allComputersCanRun = false;
    } else {
        someComputersCanRun = true;
    }
}

computers.every(function(computer){
    return computer.ram >= 16;
});

computer.some(function(computer){
    return computer.ram >= 16;
});

const names =[
    'けん',
    '花子',
    '宗一郎'
];

names.every(function(name) {
    return name.length >= 3;
});

names.some(function(name) {
    return name.length >= 3;
});

function Field(value) {
    this.value = value.length > 0;
}
Field.prototype.validate = function() {

}

var username = new Field('my_username');
var password = new Field('my_password');

username.validate();

function Field(value) {
    this.value = value.length > 0;
}

Field.prototype.validate = function() {
    return this.value;  
};

var username = new Field('my_username');
var password = new Field('my_password');

console.log(username.validate()); 
console.log(password.validate());  

var fields = [
    username,
    password
];

fields.every(function(Field) {
    return field.validate();
});

var fields = [
    username,
    password
];

var allValid = fields.every(function(field) {
    return field.validate();
});

console.log(allValid);