import React from 'react';
import '../App.css';
function Home(props)
{
    console.warn("home props>>>", props.data)
    return(
        <div>
            
            <h1>Home Component</h1>

            <div className='cart-wrapper'>

                <div className="img-wrapper item">
                    <img src="https://banner2.cleanpng.com/20180325/sxq/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg" alt=''/>
                </div>

                <div className="text-wrapper item">
                    <span>iphone 12 </span> <br />
                    <span>Price: $1000</span>
                </div>

                <div className="btn-wrapper item">
                   <button onClick={()=>props.addtoCartHandler({price:1000, name:'iphone 12'})}>Add to Cart</button>
                </div>


            </div>



        </div>
    )
}

export default Home;