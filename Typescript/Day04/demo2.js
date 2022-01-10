// User defined Function
// 1 function without arg. & without return type
// 2 function with arg. & without return type
// 3 function without arg. & with return type
// 4 function with arg. & with return type
// 1 function without arg. & without return type
function add1() {
    console.log("1 function without arg. & without return type");
}
// add1(); //function call 
// 2 function with arg. & without return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(2,3);
// 3 function without arg. & with return type
function add3() {
    return (10 + 3);
}
var temp = add3();
// console.log("Addition is "+temp);
// 4 function with arg. & with return type
function add4(a, b) {
    return (a + b);
}
var temp1 = add4(8, 9);
console.log("Adition is => " + add4(4, 5));
console.log("Temp1 value is " + temp1);
