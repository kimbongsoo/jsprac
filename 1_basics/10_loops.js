/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log('---------------')

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log('---------------')

for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}

console.log('---------------')

let square = '';

for (let i = 0; i<6; i++){
    for(let j = 0; j<6; j++){
        square += '*';
    }
    square += '\n'
}

console.log(square);

/**
 * for...in
 * index 값을 가져오고 싶을 때
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}

for(let key in yuJin){
    console.log(key)
}

const seasonArray = ['봄', '여름', '가을', '겨울'];

for(let key in seasonArray){
    console.log(key);
    console.log(`${key}:${seasonArray[key]}`)
}

/**
 * for...of ->array에서 사용 가능
 * value 값을 가져오고 싶을 때
 */

for(let value of seasonArray){
    console.log(value);
}

/**
 * While
 */

let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do..while
 */

number = 0;

do{
    number ++;
}while(number < 10);

console.log(number);

console.log('---------------')

for(let i = 0; i < 10; i++){
    if ( i === 5){
        break;
    }
    console.log(i);
}

console.log('---------------')

number = 0;

while(number < 10){
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}

/**
 * continue
 * 현재 진행중인 loop을 skip 함
 */
console.log('---------------')

for(let i =0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('---------------')

number = 0;

while(number < 10){
    number ++;

    if (number === 5){
        continue;
    }

    console.log(number);
}