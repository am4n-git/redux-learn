import React from 'react';
import { commoncontext } from './commoncontext'
import { Component } from 'react';
function Button(){
      return(
        <commoncontext.Consumer >
          {
              ({updateColor})=>(
                  <div>

                  
                  <button onClick={()=>updateColor('blue')}>Update Color</button>
                  <button onClick={()=>updateColor('yellow')}>Update Yellow</button>
                  </div>
              )
          }
        </commoncontext.Consumer>
        
      );

}

export default Button;