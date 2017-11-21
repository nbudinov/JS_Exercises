import React from 'react'

const Input = (props) => {

    let type = props.type || "text";

    return (
        <div>
            <label htmlFor={props.name}> {props.placeholder}:  </label>
            <input
                id={props.name}
                type={type} 
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input