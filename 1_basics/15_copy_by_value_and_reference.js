/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';

console.log('--------------');
console.log(original);
console.log(clone);


console.log('--------------');

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('--------------');

originalObj['group'] = '어른브';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj); //true

console.log('--------------');

//test

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1;

const yuJin3 ={
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2); //true
console.log(yuJin1 === yuJin3); //false
console.log(yuJin2 === yuJin3); //false

/**
 * Spread Operator
 * -> copy by value기 때문에 메모리공간에 다른 주소값 참조
 */
console.log('--------------');

const yuJin4 = {
    ...yuJin3,
}
console.log(yuJin4);
console.log(yuJin3 === yuJin4)

console.log('--------------');

//순서를 다르게하면 value 덮어쓰기 가능
const yuJin5 = {
    year: 2003,
    ...yuJin3,
}
console.log(yuJin5)