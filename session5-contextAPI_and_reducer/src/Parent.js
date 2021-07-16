import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return(
        <div>
            <p>I am Parent Component</p>
            <Child/>
        </div>
    );
}

export default Parent;