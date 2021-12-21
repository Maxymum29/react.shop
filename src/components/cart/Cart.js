import './Cart.css';

const Cart = ({ quantity = 0, handelBasketShow = Function.prototype }) => {
    return (
        <div
            className="cart blue lighten-2 white-text"
            onClick={handelBasketShow}
        >
            <i className="material-icons ">local_grocery_store</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
};

export default Cart;
