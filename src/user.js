import React from 'react';
const User=(props)=>{
    return(
        <div>
            <h3>User Component </h3>
            <h4>Name: {props.data.name} Age: {props.data.age}</h4>
        </div>
    )
}
export default User