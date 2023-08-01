/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){
        return new IdolModel(name, year);
    }
    // console.log(new.target)
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());

console.log('-------------------')
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// console.log(global.name);

// new 키워드는 일반 함수에서만 사용 가능 Arrow함수에서는 불가능
// const IdolModelArrow = (name, year)=>{
//     this.name = name;
//     this.year = year;
// };

// const yuJin3 = new IdolModelArrow('안유진', 2003);
 