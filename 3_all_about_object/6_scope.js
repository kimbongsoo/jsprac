/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne();

function levelOne(){
    var numberOne = 40;
    console.log(numberOne);
}

// levelOne();

console.log(numberOne);


function levelOne(){
    var numberOne = 40;
    console.log(numberOne);

    function levelTwo(){
        var numberTwo = 99;
    
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
    
}

levelOne();
console.log(numberOne);
// console.log(numberTwo);

/**
 *  JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 * */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();

}

function functionTwo(){
    console.log(numberThree);
}

functionOne();
// var은 새로운 스코프가 function에서만 선언됨.
var i = 999;

for(var i = 0; i<10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * let 또는 const를 사용할 경우
 * block level scope(for, if, while ..)도 새로운 스코프를 만들어낼 수 있다.
 */
i = 999;
for(let i = 0; i<10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);