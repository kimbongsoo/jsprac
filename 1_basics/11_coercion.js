/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 28;

//명시적

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적

let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); //982
console.log('98' * 2); //982
console.log('98' - 2); //982

/**
 * 명시적 변환 몇가지 더
 */

console.log('---------------')

console.log(typeof (99).toString(), (99).toString() );
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

console.log('---------------')

// 숫자 타입으로 변환

console.log(typeof parseInt('0'),parseInt('0'));
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof + '1', +'1')

console.log('---------------')

/**
 * Boolean 타입으로 변환
 * string 값 안에 값이 있으면 Boolean 기준으로 true다
 */
console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!false);
console.log(!!'false');
console.log(!!null);
console.log(!!undefined);

console.log(!!{});
console.log(!![]);

/**
 * 모두 false를 반환하는 경우
 * 
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */

/**
 * Object, Array는 비어있어도 true 반환
 */







