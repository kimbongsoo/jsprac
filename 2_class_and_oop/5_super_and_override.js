/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name} 입니다.`
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    constructor(name, year, part){
        super(name, year); //부모클래스
        this.part = part;
    }

    sayHello(){
        //return `안녕하세요 ${this.name} 입니다. ${this.part}를 맡고있습니다.`; //constructor가 아닌 곳에서는 this를 써야 함
        return `${super.sayHello()} ${this.part}를 맡고있습니다.` //function에서 super 사용 가능
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());