
var veriabl = 10 ;
// (()=>{
// console.log(veriabl);
// veriabl=20
// console.log(veriabl);
// })();
// console.log(veriabl);
// var veriabl = 30;
// console.log(veriabl);

// ########## 
// veriable = 10;
// (()=>{
//     foo=100 ;//ReferenceError: foo is not defined :  error on this line bcz foo is not a global 
//     console.log(veriable);
//     var foo=20;
//     veriable=100;
// })
// console.log(foo);
// console.log(veriable);
// var veriable =30;

//################
// for (var i =0;i<10;i++){
//     setTimeout(()=>console.log(i),0)// it will only print 10*10 
// }
// for (let i =0;i<10;i++){
//     setTimeout(()=>console.log(i),0)// it will work properly bcz let has local scope veriable it creates new veriable localy  
//}

//########## 
var fname ="rutvik Patil"

var obj={
    fname:"full hacked name ",
    prop:{
        fname:"Inside Prop",
        getFname:function(){
            return this.fname;
        },
    },
    getFname:function(){
        return this.fname;
    },
    getFnamev2:()=>this.fname,// arrow function always reffer to window object in browser  and globle object 
    getFnamev3:(function(){//this is a iife function so it will exicute first 
        return this.fname;
    })(),
};
console.log(obj.prop.getFname());//OP :Inside Prop  =>
console.log(obj.getFname());//OP :full hacked name  =>
console.log(obj.getFnamev2());//OP :undefined  =>
console.log(obj.getFnamev3());//OP :TypeError: obj.getFnamev3 is not a function  =>this is a iife function so it will exicute first

