// push & pop

let a:number[]=[];
// It works on LIFO Principal Last in first out

// a.push(45);
// console.log(a);
// a.push(66,78,21);
// console.log(a);
// let temp=a.pop();
// console.log(a);
// console.log("Poped Value is "+temp);


//splice
// it is also used to add data in any index 

// a.splice(0,0,7);
// console.log(a);
// a.splice(0,0,5);
// console.log(a);
// a.splice(0,0,45);
// console.log(a);
// a.splice(2,0,55,75,12);
// console.log(a);

// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(0,1,88);
// console.log(a);
// a.splice(0,2,66,90);
// console.log(a);
// a.splice(1,2,100);
// console.log(a);


//slice
// It Copies a section of data
let b=['Angular 8','React Js','Vue Js','Embber Js','JSP','Android','Core Java','Spring boot'];

let str=b.slice(1,6);
console.log("Original data "+b);
console.log("Copies Data "+str);
let str1=b.slice(2);
console.log(`
    Copied data ${str1}
`)
