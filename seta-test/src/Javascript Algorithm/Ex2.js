function sumOfTop2BiggestNumber(myArr) {
    let num1 = myArr[0];
    let num2 = myArr[1];

    for(let i = 2; i < myArr.length; i++) {
        if (myArr[i] > Math.min(num1, num2)) {
            if (num1 < num2) {
                num1 = myArr[i];
            } else {
                num2 = myArr[i];
            }
        }
    }
    return num1 + num2;
} 

const myArr1 = [1, 4, 2, 3, 5];
console.log("Test1:",sumOfTop2BiggestNumber(myArr1));

const myArr2 = [1, 4, 2, 3, 5, 7, 8];
console.log("Test2:",sumOfTop2BiggestNumber(myArr2));

const myArr3 = [20, 50, 2, 30, 3, 4, 57];
console.log("Test3:",sumOfTop2BiggestNumber(myArr3));
