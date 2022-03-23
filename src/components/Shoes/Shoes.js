import React from 'react';
import { add, multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first = 12;
    const second = 13;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h1>This is my shoe page</h1>
            <p>Result: {result} total: {sum}</p>
        </div>
    );
};

export default Shoes;