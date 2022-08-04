//1//
const pow = (a,n) => {
    if(n===1) 
    {return a}
        return a*pow(a,n-1)}
// //2 /
const arr=[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const flatArr=[];
const getFlatArray = (arr) => {
    for (let el of arr) {
        if ( Array.isArray(el) ) {
            return getFlatArray(el);
        }
        flatArr.push(el);
    };
    return flatArr;
}
console.log(getFlatArray(arr))

// 3//

let onesNumber = ['',' один',' два',' три',' четыре',' пять',' шесть',' семь',' восемь',' девять'];
let tenNumber= ['','десять',' двадцать',' тридцать',' сорок',' пятьдесят',' шестьдесят',' семьдесят',' восемьдесят',' девяносто'];
let hundredNumber = ['','сто',' двести',' триста',' четыреста',' пятьсот',' шестьсот',' семьсот ',' восемьсот ',' девятьсот',''];
let anyNumber = ['десять',' одиннадцать ',' двенадцать ',' тринадцать ',' четырнадцать ',' пятнадцать ',' шестнадцать ',' семьнадцать ',' восемьнадцать ',' девятнадцать ',''];
function stringChange(target){
    let targetNumber = String(target).split('').reverse()
    let intString = "";
    let thousand = '';
    let other= ['2','3','4'];
    if (targetNumber[3] === '1' && targetNumber[4] !== '1') {
        thousand = ' тысяча '
    } else if ((other.includes(targetNumber[3])) && targetNumber[4] !== '1') {
        thousand = ' тысячи '
    } else {
        thousand = ' тысяч '
    }
    if (targetNumber.length > 3) {
        intString+= hundredNumber[targetNumber[5]]  || ''
        if (targetNumber[4] === '1') {
            intString += anyNumber[targetNumber[3]] + thousand || ''
        } else if (targetNumber[3] === '1') {
            intString+= tenNumber[targetNumber[4]] || ''
            intString += ' одна '  + thousand || ''
        } else if (targetNumber[3] === '2') {
            intString+= tenNumber[targetNumber[4]] || ''
            intString += ' две '  + thousand || ''
        } else {
            intString += tenNumber[targetNumber[4]] || ''
            intString+= onesNumber [targetNumber[3]]  + thousand || ''
        }
    }
    intString += hundredNumber[targetNumber[2]]   || ''
    if (targetNumber[1] === '1') {
        intString += anyNumber[targetNumber[0]]  || ''
    } else {
        intString += tenNumber[targetNumber[1]]  || ''
        intString += onesNumber [targetNumber[0]]   || ''
    }
    console.log(target + ' : ' + intString)
}
console.log(1)
stringChange(12000)

