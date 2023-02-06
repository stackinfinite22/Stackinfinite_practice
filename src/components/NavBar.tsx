import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from "react-redux";


const Navbar  = () => {
     
    const {cartTotalQuantity}= useSelector((state:any )=> state.cart);

    return (<nav className="nav-bar">
        <a href="/" className="logo">
        <img src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/null/external-E-commerce-Platform-content-management-filled-color-icons-papa-vector.png" alt=""/>
           <h2>Apna Store</h2>
        </a>
        <div className="form-group has-search">
             <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search for products"/>
        </div>
        <a href ="/cart">
            <div className="nav-items">
            <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/null/external-cart-business-finance-vol4-microdots-premium-microdot-graphic.png" alt=""/>                <span className="item-quantity">
                    <span>{cartTotalQuantity}</span>
                 </span>

             </div>

        </a>    
        
    </nav>
    )
}
 
export default Navbar ;