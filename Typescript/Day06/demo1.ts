
// array is growable & shrinkable dynamically
// in array homogenous as well as heterogenous data type u can store 

var a1=[2,3,4,5];
var a2:string[]=['angular 8','React Js','Vue Js','Embber Js'];
var a3:any[]=[];
var a4=[];
var a5=[2.5,'Sumit',true,8,'Angular 8'];

// for(let i=0;i<a1.length;i++){
//     console.log(` 
//         a1[${i}]=${a1[i]}
//     `)

//     // console.log("a1["+i+"]="+a1[i])    

// }

// console.log("Array Value is "+a1);
// console.log("Array Value is "+a1.join('$'));
// console.log("Array Value is "+a1.join(' '));

//foreach

// a1.forEach((myvalue,i,s1)=>{
//         console.log("Value is "+myvalue+" Index is "+i)
//         console.log(s1+"----------------")
// });

// Rest parameter function

function display(...item:number[]){
    console.log(item)
}

// display(2,11,32);
// display(2,11,32,77,88,99,100);
// display();

function display1(a:string,...item:number[]){
    console.log("Value of a is "+a)
    console.log(item)
}

display1("Sumit",4,5,6,7);



