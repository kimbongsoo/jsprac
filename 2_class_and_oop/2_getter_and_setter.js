/**
 *  Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * Getter 사용
     * 
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    /**
     * setter 
     * 값을 새로 저장할 때 사용
     */
    set name(name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.name = '장원영'
console.log(yuJin);


class IdolModel2{
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2)
console.log(yuJin2.name);

console.log('----------')
yuJin2.name = '장원영';
console.log(yuJin2.name);


