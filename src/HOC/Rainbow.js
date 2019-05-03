import React from 'react';

const Rainbow = (WrappedComponent) => {
    const  colors = ['red', 'green', 'teal', 'yellow', 'cyan '];
    const randomColor = colors[Math.floor(Math.random()*4)];
    const className = randomColor+'-text';

    return(props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

};

export default Rainbow;