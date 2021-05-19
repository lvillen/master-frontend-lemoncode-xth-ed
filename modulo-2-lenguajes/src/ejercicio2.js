// 2. Concat

const arr1 = ["hey", "ho"];
const arr2 = ["let's", "go"]
const arr3 = ["one", "two"];
const arr4 = ["one", "two", "three", "four"];

// Two arrays

const concat = (a, b) => { 
    const newArr = [...a, ...b];
    return newArr;
};

console.log(concat(arr1, arr2));

// More than two arrays

// // Imperative

const superConcat = (...args) => {
    const newArr = [];
    for (let arr of args) {
        newArr.push(...arr);
    }

    return newArr;
}

// // Recursive

const recursiveConcat = (...args) => {
    if (!args.length) {
        return [];
    }

    const [head, ...tail] = args;
    const tailJoined = recursiveConcat(...tail);
    return [...head, ...tailJoined];
}


console.log(superConcat(arr3, arr4, arr1, arr2));
console.log(recursiveConcat(arr3, arr4, arr1, arr2));