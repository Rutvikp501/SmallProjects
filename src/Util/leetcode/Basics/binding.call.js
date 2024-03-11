const Rutvik = {
    name:"Rutvik",
    sayName:function(){
        console.log(this.name);
    },
};
const Kanak = {
    name:"Kanak",
    sayName:function(){
        console.log(this.name);
    },
};

Kanak.sayName.call(Rutvik); //OP: Rutvik => when we use .call it only gives output or print and while we use "bind" it gives us a newfn that we can use as mainy times as we want 
Kanak.sayName();     //OP: Kanak =>
setTimeout(Rutvik.sayName, 3*1000); // OP : undefind 
setTimeout(()=>Rutvik.sayName(), 3*1000); //OP: Rutvik =>
setTimeout(Rutvik.sayName.bind(Kanak), 3*1000); //OP: Rutvik =>to give it a context we can use binding function with the context we need // or we can use a closer fn as well 
