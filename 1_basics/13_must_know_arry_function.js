/**
 * Array Function
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push

console.log(iveMembers.push('아아'));
console.log(iveMembers);

console.log('---------------')

//pop 마지막 element 삭제 후 반환
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------')

//shift()
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('---------------')

//unshift() push와 같으나 첫번째에 값을 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('---------------')

console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

// 다시

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];


console.log('---------------')

/**
 * concat()
 * 
 * push와 같으나 원래의 Array를 변경하지 않음
 */
console.log(iveMembers.concat('아아'));
console.log(iveMembers);


console.log('---------------')

/**
 * slice(x, y) x인덱스 부터 y-1 인덱스까지
 * 
 * splice()와 같으나 원래 Array를 변경 x
 */
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

console.log('---------------')

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

console.log('---------------')

// join() 값을 string으로 엮을 때 사용
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

console.log('---------------')

// sort() 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

console.log('---------------')

let numbers = [
    1,9,7,5,3,
];
console.log(numbers);

/**
 * a, b를 비교했을때
 * 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
 * 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a,b)=>{
    return a>b ? 1: -1;
});
console.log(numbers)

console.log('---------------')

numbers.sort((a,b)=> a > b ? -1 : 1);
console.log(numbers);

// map() 원래의 Array를 변경하지 않음
console.log('---------------')

console.log(iveMembers.map((x)=> `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));

console.log(iveMembers);

//filter() true면 keep, false는 반환x
console.log('---------------')

numbers = [ 1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));

console.log(numbers.filter((x) => x % 2 === 0));

/**
 * find()
 * 
 * true일 경우 반환
 * filter와 차이 : 조건에 충족하는 첫번째 값만 즉시 반환
 */
console.log('---------------')
console.log(numbers.find((x) => x % 2 === 0 ));

// findIndex()
console.log('---------------')

console.log(numbers.findIndex((x) => x % 2 === 0 ));

// reduce(,시작 값)
console.log('---------------')

/**
 * numbers = [ 1, 8, 7, 6, 3];
 * 1) 초기값인 0이 p에 입력된다.
 * 2) numbers 어레이의 첫번째 값인 1이 n에 입력된다.
 * 3) p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4) 3에서 반환한 값(1)이 p에 입력된다.
 * 5) 어레이의 두번쨰 값인 8이 n에 입력된다.
 * 6) p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7) 6에서 반환한 값(9)가 p에 입력된다.
 * 9) numbers 리스트의 모든 값들을 다 순회할떄까지 반복 => 결국 모든 값을 더한 25가 반환 
 */
console.log(numbers.reduce((p,n) => p+n ,0));
