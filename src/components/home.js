import React from 'react';
import '../App.css';
function Home()
{
    return(
        <div>
            <h1>Home Component</h1>

            <div className='add-to-cart'>
                <img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'/>
            </div>

            <div className='cart-wrapper'>
                <div className="img-wrapper item">
                    <img src="https://banner2.cleanpng.com/20180325/sxq/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg" />
                </div>

                <div className="text-wrapper item">
                    <span>iphone 12 </span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                   <button>Add to Cart</button>
                </div>

            </div>



        </div>
    )
}

export default Home;