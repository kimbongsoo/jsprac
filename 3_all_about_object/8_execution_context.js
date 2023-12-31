/**
 * Execution Context는 실행하려는 JS 코드와 코드를 실행할때 필요한 정보를 담고있는 특수한 환경
 * 코드 실행에 필요한 모든 데이터를 들고있는 환경이라고 생각하면 된다.
 * 
 * Execution Context는 크게 두개로 나뉘어진다.
 * 
 * 1) Global Context-> 최상위 Execution Context다. 코드를 실행하면 무조건 생성되는 context로 웹에서의 window 객체나 nodeJs에서의
 *    global 객체를 생성하고 들고있는다.
 * 
 * 2) Function Context -> 함수가 실행될때마다 함수별로 실행되는 context다. 함수 실행에 대한 모든 정보를 갖는다.
 * 
 */

/**
 * JS는 sigle thread program이다.
 * 
 * sigle thread에는 Memory Heap과 Call Stack (Execution Context Stack)이 있다.
 */

function one(){
    console.log('run one');
    console.log('run one finished');
}

function two(){
    console.log('run two');
    one();
    console.log('run two finished');
}

function three(){
    console.log('run three');
    two();
    console.log('run three finished');
}

three();

/**
 * Execution Context Stack이 생성될 때
 * 
 * Creation Phase
 * - Global Object를 생성한다. window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.
 * - this를 window 또는 global에 바인딩한다.
 * - 변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다. ex) hoisting이 일어나는 이유 creation phase가 먼저 선언되기 때문에
 * 
 * Execution Phase
 * - 코드를 실행한다.
 * - 필요하다면 새로운 Execution Context를 생성한다.
 */