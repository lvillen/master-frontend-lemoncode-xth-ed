// 1. Array operations

//Head
const headArr = ['head', 'center', 'tail'];

const head = ([head]) => head;

console.log(`The head of the array is: ${head(headArr)}`);

//Tail
const tailArr = [0, 1, 2, 3, 4, 5];

const tail = ([first, ...arr]) => arr;

console.log(`The tail of the array, without the first element, would be: ${tail(tailArr)}`);

//Init
const initArr = [5, 4, 3, 2, 1, 0];

const init = (arr) => arr.slice(0, -1);

console.log(`The begginning of the array, without the last element, woulde be: ${init(initArr)}`);

//Last
const lastArr = ['head', 'center', 'tail'];

const last = (arr) => arr.pop(); // destructuring: const last = ([, , tail]) => tail;

console.log(last(lastArr));