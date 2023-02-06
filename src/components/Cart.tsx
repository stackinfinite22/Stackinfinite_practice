import { useSelector ,useDispatch} from "react-redux";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/cartSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";


export type cartItem= {
    id:number ;
    image: string ;
    name: string ;
    description: string;
    price: number;
    cartQuantity:  number;
}

const Cart = () => {
    const cart=useSelector((state:any) => state.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getTotals(''));

    },[cart,dispatch])

    const handleRemoveFromCart=(cartItem: any)=>{
        dispatch(removeFromCart(cartItem))

    }
    const handleDecreaseCart =(cartItem: any)=>{
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart=(cartItem: any)=>{
        dispatch(addToCart(cartItem))
    }
    const handleClearCart=(cartItem: ActionCreatorWithPayload<any, "cart/clearCart">)=>{
        dispatch(clearCart(cartItem))
    }
    return( <div className="cart-container">
        <h2>Your Cart</h2>
        {cart.cartItems.length ===0 ?(
            <div className="cart-empty">
                <p>Your Cart is currently empty</p>
                <div className="start-shopping">
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                        <span>Start Shopping From Here</span>
                    </a>
                </div>

            </div>
        ):(
            <div>
            <div className="titles" >
                <h3 className="product-title">Added Products</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>

            </div>
            <div className="cart-items">
                {
                    cart.cartItems?.map((cartItem: { id: Key | null | undefined; image: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; cartQuantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; }) =>(
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                                <img src ={cartItem.image} alt="Image Loading"/>
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.description}</p>
                                    <button onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">₹{cartItem.price}</div>
                            <div className="cart-product-quantity">
                                <button onClick={()=>{handleDecreaseCart(cartItem)}}>-</button>
                                <div className="count">{cartItem.cartQuantity}</div>
                                <button onClick={()=>{handleIncreaseCart(cartItem)}}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                ₹{ Number(cartItem.price)*Number(cartItem.cartQuantity)}
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="cart-summary">
                <button className="clear-btn" onClick={()=>{handleClearCart(clearCart)}}>Clear Cart</button>
                <div className="cart-checkout">
                    <div className="subtotal">
                        <span className="amount">₹{cart.cartTotalAmount}</span>
                    </div>
                    <p>Taxes and shipping charges calculated at checkout</p>
                    <button>Check Out</button>
                    <div className="start-shopping">
                    <a href="/">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                       <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                       </svg>
                      <span>Continue Shopping...</span>
                    </a>
                </div>
                </div>
            </div>
            </div>
            )}
    </div>
    );
}
 
export default Cart;