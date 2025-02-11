//Task: Sum of Even Numbers in an Array
function sumOfEvens(numbers) {
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvens(numArray)); 
