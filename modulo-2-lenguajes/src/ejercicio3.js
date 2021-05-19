// 2. Clone merge

const author = {
    name: 'JRR',
    lastname: 'Tolkien',
    books: ['The lord of the rings', 'The hobbit', 'The Silmarillion'],
    country: 'South-Africa'
}

const titles = {
    books: ['The lord of the rings', 'The hobbit'],
    country: 'United Kingdom', 
    son: 'Christopher'
}

function clone(source) {
    const newObj = {...source};
    return newObj;
}

console.log(clone(author));

function merge(source, target) {
    const newObj = {...target, ...source};
    return newObj;
}

console.log(merge(author, titles));