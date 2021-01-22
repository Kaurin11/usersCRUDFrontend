import React from 'react';

const Button = ({onClick, name, className }) => {
    return(
        <div>
            <button className={className}  onClick={onClick}>{name}</button>
        </div>

    )
}

export default Button;