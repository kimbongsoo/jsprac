/**
 * Data Types
 * 
 * 6개의 Primitive Type과 1개의 Object type
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 * */

const pi = 3.14;

console.log(typeof pi);

const name = '아아';

console.log(typeof name);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶으면 2번 입력
 * 
 */

const summer = `여름
더워`;
console.log(summer);

const season = '여름';
console.log(season + ' 더워')
console.log(`${season} 더워`)

/**
 * Boolean 
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);


/**
 * null type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용
 * 
 */

/**
 * Symbol type
 * 
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 심볼함수 호출해서 사용
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);


/**
 * Object type
 * 
 * Map
 * key:value 의 쌍으로 이루어져있다/
 */

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

/**
 * Array type
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 * 
 */

const seasonArray = ['봄', '여름', '가을', '겨울'];
console.log(seasonArray);
console.log(seasonArray[0]);

seasonArray[0] = '봄봄';
console.log(seasonArray);

/**
 * static typing -> 변수를 선언할떄 어떤 타입의 변수를 선언할지 명시한다
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 감에의해 타입을 '추론'한다.
 * ->JS
 */




