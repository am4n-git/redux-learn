import Home from '../components/home'
import {connect} from 'react-redux'  //connect react and redux
import {addtoCart, removeToCart} from '../services/actions/action' //importing action data

const mapStateToProps =state=>({
    // data:state.cartItems
})

const mapDispatchToProps = dispatch=>({
    addtoCartHandler:data=>dispatch(addtoCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);