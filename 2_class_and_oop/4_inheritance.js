/**
 * Interitance
 * 
 * 클래스는 객체지향 프로그래밍에서 특정 객채(인스턴스)를 생성하기 위한 변수와 메소드를 정의하는 틀
 * 
 * 상속은 객체간의 관계를 구축하는 방법 수퍼클래스 또는 부모클래스 등의 기존 클래스로부터 속성과 동작을 상속받을 수 있다.
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return '여자 아이돌이 춤을 춥니다.'
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.'
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(jiMin.sing());

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);


