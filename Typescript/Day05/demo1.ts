//anonymous Functions
let temp1=function (){
    console.log('anonymous Functions called');
}

// temp1();

var temp2=function (a:number,b:number):number{
    return (a+b);
}

// console.log(` Addition is ${temp2(2,5)} `);

//fat arrow function/Arrow Function

  let temp3= ()=>{
        console.log("Fat Arrow function is called")
    }

    // temp3();

   let temp4= (a:number,b:number):number=>{
        return (a+b);
    }

    // console.log(`Addition is ${temp4(4,8)}`)

    // optional parameter Functions

    function add1(a:number,b?:number){
        console.log("Value of a is "+a);//8
        console.log("Value of b is "+b);//undefined
        console.log("Value of a+b is "+(a+b));//NAN=> Not a number
    }

    // add1(8)

    function add2(a?:number,b?:number){
        console.log("Value of a is "+a);//2
        console.log("Value of b is "+b);//undefined
        console.log("Value of a+b is "+(a+b));//NAN=> Not a number
    }

    // add2(2);
    // add2(2,3)

    //Default parameter Functions

    function add3(a:number,b:number=8){
        console.log("Value of a is "+a);//7
        console.log("Value of b is "+b);//1
        console.log("Value of a+b is "+(a+b));//8
    
    }

    // add3(5)
    // add3(7,1)

    function add4(a:number=5,b?:number){
        console.log("Value of a is "+a);//5
        console.log("Value of b is "+b);//undefinrd
        console.log("Value of a+b is "+(a+b));//8
    
    }

    // add4(4,2)
    add4();
