import React from 'react';


function Test (props) {
    const ENV_VAR_TEST = process.env.TEST;

    return (
        <div>
            {ENV_VAR_TEST}
        </div>
    )
}

export default Test;