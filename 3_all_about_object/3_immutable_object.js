/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin));

yuJin.position = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin.GroupName = '아이브';
console.log(yuJin);

delete yuJin.position;
console.log(yuJin);

/**
 * Seal (봉인)
 * 기본값 false
 * 어트리뷰트 configurable = false인 상태 + 값 추가,변경 불가
 */

console.log('-----Seal-----');

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2.GroupName = '아이브';
console.log(yuJin2);

delete yuJin2['name']; //삭제 안됨
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    value: '팩토리',
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다
 */
console.log('------Freeze------');

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3.GroupName = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name',{
//     value:'팩토리'
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung:{
        name: '장원영',
        year: 2002,
    },

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4)); //true
console.log(Object.isFrozen(yuJin4['wonYoung'])); //false 상위가 freeze됐다고해서 하위도 freeze되진 않음
