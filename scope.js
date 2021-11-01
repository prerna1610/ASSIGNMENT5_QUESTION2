var car="in global";
console.log("global: car=" + car);

var a = function(){
    var car = "inside a";
    console.log("a: car = "+ car);

    b();
}
var b=function(){
    var car = "inside b";
    console.log("b: car = "+ car);
 
}
a();

var message = 'Hi';

function say() {
    var message = 'Hello';
    console.log('message');
}

say();
console.log(message);



