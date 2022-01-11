//anonymous Functions
var temp1 = function () {
    console.log('anonymous Functions called');
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log(` Addition is ${temp2(2,5)} `);
//fat arrow function/Arrow Function
var temp3 = function () {
    console.log("Fat Arrow function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`Addition is ${temp4(4,8)}`)
// optional parameter Functions
function add1(a, b) {
    console.log("Value of a is " + a); //8
    console.log("Value of b is " + b); //undefined
    console.log("Value of a+b is " + (a + b)); //NAN=> Not a number
}
// add1(8)
function add2(a, b) {
    console.log("Value of a is " + a); //2
    console.log("Value of b is " + b); //undefined
    console.log("Value of a+b is " + (a + b)); //NAN=> Not a number
}
// add2(2);
// add2(2,3)
//Default parameter Functions
function add3(a, b) {
    if (b === void 0) { b = 8; }
    console.log("Value of a is " + a); //7
    console.log("Value of b is " + b); //1
    console.log("Value of a+b is " + (a + b)); //8
}
// add3(5)
// add3(7,1)
function add4(a, b) {
    if (a === void 0) { a = 5; }
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); //undefinrd
    console.log("Value of a+b is " + (a + b)); //8
}
// add4(4,2)
add4();
