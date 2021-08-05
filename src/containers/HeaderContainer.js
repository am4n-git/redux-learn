import Header from '../components/header'
import {connect} from 'react-redux'  //connect react and redux


const mapStateToProps =state=>({
    data:state.cartItems
})

const mapDispatchToProps = dispatch=>({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);