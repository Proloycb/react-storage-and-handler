const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const divide = (first, second) => {
    return first / second;
}

// const numbers =[20, 24, 34, 23];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);

// const items = [
//     {id: 1, name: 'Alta', price: 256},
//     {id: 1, name: 'Alta', price: 256},
//     {id: 1, name: 'Alta', price: 256},
//     {id: 1, name: 'Alta', price: 256},
//     {id: 1, name: 'Alta', price: 256},
// ];
// const itemReducer = (previous, current) => previous + current.price;
// const total = items.reduce(itemReducer , 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    add,
    multiply,
    divide,
    getTotalPrice as getTotal
};
