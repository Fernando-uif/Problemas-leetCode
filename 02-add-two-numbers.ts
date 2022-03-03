const addTwoNumber = (l1:number[] | null, l2: number[] | null):number[]| null => {
    let l1Reverse = (l1) ? l1.reverse():[];
    let l2Reverse = (l2) ? l2.reverse():[];
    // TODO aplicar un reverse con for

    let respUniendo1 = l1Reverse.join('');
    let respUniendo2 = l2Reverse.join('');

    let ansSum = +respUniendo1 + +respUniendo2;

    let ansString = ansSum + '';
    let respTotalArr = ansString.split('');

    let respNum = respTotalArr.map((value) => +value);
    // TODO aplicar un reverse con for
    let algo = respNum.reverse()
    return algo;
}
console.log(addTwoNumber([0], [1]));

const reverso = (l1:number[] | null, l2: number[] | null):number[] => {

    
    return [3]

}

