import PropTypes from 'prop-types';
import './Cart.css'
const Carts = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <p>{bottle.name}</p>
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Carts.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired

}

export default Carts;