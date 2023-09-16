import PropTypes from 'prop-types';
import "./Bottle.css"
const Bottle = ({bottle,handleAddToCart}) => {
    const{name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src= {img} alt={name} />
            <p>Price: {price}tk</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>

            
        </div>
    );
};

export default Bottle;