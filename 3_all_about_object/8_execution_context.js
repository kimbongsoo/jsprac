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