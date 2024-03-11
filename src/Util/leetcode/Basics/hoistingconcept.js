// #####################  hoisting  concept ################
console.log(`age is =>${Age}`);
var Age = 10;
console.log(`age is =>${Age}`);

// no=20 //ReferenceError: Cannot access 'no' before initialization ==> bcz it lies in temperal dead zone which is before initialization of variable 
// console.log(`let is =>${no}`);//ReferenceError: Cannot access 'no' before initialization
// let no = 10;
// console.log(`let is =>${no}`);

//############# Hosting ###########
foo =30;
console.log("foo",foo);
var foo=100;
console.log("foo",foo);

//#####################################
// in memeory section var myfun was there then it got updated at function and stored whole function as value in initial stage before codeexicution started then it first execte 
// that function then value got updated as first then we had two function call 
myfun();

var myfun=function(){
    console.log("first");
};

myfun();

function myfun(){
    console.log("second");
};

myfun();