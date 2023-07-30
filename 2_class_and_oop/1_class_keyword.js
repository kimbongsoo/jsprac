/**
 * Class Keyword
 * 
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메서드를 정의하는 일종의 틀
 * 
 *  대문자로 시작
 */
class IdolModel{
    name; // 생략 가능하지만 쓰는게 좋다고 생각함. 
    year; 

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    sayName(){
        return `안녕하세요 저는 ${this.name} 입니다.`
    }
}

// constructor - 생성자
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel); //클래스는 함수
console.log(typeof yuJin); // 클래스로 생성한 인스턴스는 오브젝트


