/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺼셈
 * 3) 곱셈
 * 4) 나눗셈 /
 * 5) 나머지 %
 */

/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자가 아닌 타입에 +, -를 사용
 */

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

// NAN -> Not a Number

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 ==
 * 2) 값과 타입의 비교 ===
 */

console.log( 5 == 5 );
console.log( 5 == '5' );
console.log( 0 == '' );

console.log( 5 === 5 );
console.log( 5 === '5' );
console.log( 0 === '' );


console.log( 5 != 5 );
console.log( 0 !== 1 );

/**
 * 대소 관계 비교 연산자
 * <, >, <=, >=
 */

/**
 * 삼항 조건 연산자 (ternary operator)
 * true 일때 : false 일때
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다')

/**
 * 논리 연산자
 * 
 * 1) && (and) 모두 true여야 true 반환
 * 2) || (or) 둘중 하나가 true면 true
 */


/**
 * 단축 평가 (short citcuit evaluation) 외워..
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log('----------------')
console.log(true || '여름');
console.log(false || '여름');

console.log(true && '여름');
console.log(false && '여름');

console.log(true && true && '여름');
console.log(true && false && '여름');

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 * null이면 ?? 뒤의 값을 넣어라
 */

let season;
console.log(season);

season = season ?? '여름';
console.log(season);

console.log('--------------');


let season2;
season2 ??= '여름';
console.log(season2);

