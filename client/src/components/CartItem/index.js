import React from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import productimage from "../../assets/images/product.jpg";



const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (event) => {
    const value = event.target.value;

    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });

      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });

      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };
  return (
    <div className="col-md-3">
      <div className="portfolio-info">
        <h3>Get Premium</h3>
        <ul>
        <img
          src={productimage}
          alt="Premium job search"
        />
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
