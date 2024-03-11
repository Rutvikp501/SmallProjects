// ################### call back function  ######################### 

function callback(text){
    console.log(`call back function `);
    console.log(text);
    return text;
}
let text = 'this is a call back return data'
function mainfunction(callback){
    console.log(`this is main function==>`);
    console.log(`${callback}`);
}
mainfunction(callback(text));