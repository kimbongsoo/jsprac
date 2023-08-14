/**
 * Async theory
 */

//동기적

// function longWork(){
//     const now = new Date();

//     /**
//      * millisconds since epoch
//      * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환.
//      */

//     const millisconds = now.getTime();
//     const afterTwoSeconds = millisconds + 2*1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World') // Hello -> 완료 -> World 순으로 출력

//비동기적

function longWork(){
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World'); //Hello -> World -> 완료

/**
 * 
 * Call Stack에 비동기 함수가 들어왔을 때 Task Queue(Event Queue)로 함수를 이동 후 수행
 * 
 * 이후 Call stack가 비었고 Task Queue에서의 함수의 동작이 끝났을 때 Event loop가 다시 Call stack에 함수를 넣음
 */