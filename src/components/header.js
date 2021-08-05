import React from 'react';
import '../App.css';
function Header(props)

{
    console.warn("header props>>>>",props.data)
    return(
    
            <div className='add-to-cart'>
                <span className="cart-count">{props.data.length}</span>
                <img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png' alt=''/>
            </div>

    )
}

export default Header;