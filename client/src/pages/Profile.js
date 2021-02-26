import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { QUERY_USER, QUERY_ME_BASIC, QUERY_PRODUCT } from "../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import Cart from '../components/Cart';
import Auth from '../utils/auth';
import Header from '../components/Header';
import { idbPromise } from "../utils/helpers";
import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_OFFERS,
  UPDATE_PRODUCT,
} from '../utils/actions';

const Profile = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { offers, product, cart } = state;
  const { id: userParam } = useParams();

  const [currentProduct, setCurrentProduct] = useState({})

  const { productData } = useQuery(QUERY_PRODUCT);

  console.log("all products", productData)

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME_BASIC, {
    variables: { id: userParam }
  });


  const user = data?.me || data?.user || {};

  // console.log("user data", user.skills);
  // const user = data?.me || data?.user || {};

  // if (!user?.email) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this page. Use the navigation links above to sign up or log in!
  //     </h4>
  //   );
  // }
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_OFFERS,
        offers: data.user.jobOffers
      })
    }
  }, [loading, data, dispatch]);

  // useEffect(() => {
  //   // already in global store
  //   if (product.length) {
  //     setCurrentProduct(product.find(item => item._id === id));
  //   } 
  //   // retrieved from server
  //   else if (productData) {
  //     dispatch({
  //       type: UPDATE_PRODUCT,
  //       product: productData.product
  //     });
  
  //     productData.product.forEach((item) => {
  //       idbPromise('product', 'put', product);
  //     });
  //   }
  //   // get cache from idb
  //   else if (!loading) {
  //     idbPromise('product', 'get').then((indexedProducts) => {
  //       dispatch({
  //         type: UPDATE_PRODUCT,
  //         product: indexedProducts
  //       });
  //     });
  //   }
  // }, [product, productData, loading, dispatch]);

  console.log(data);

  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Redirect to="/profile" />;
  }

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === id)
  
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 0
  //     });
  //     // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...currentProduct }
  //     });
  //     // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
  //     idbPromise('cart', 'put', { ...currentProduct });
  //   }
  // }

  return (
    <section style={{ margin: 0 }}>
      <Header
        image={user.image}
        firstName={user.firstName}
        lastName={user.lastName}
        skill={user.skills}
      ></Header>

      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfolio Details</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link ro="/">Portfolio</Link></li>
                <li>Portfolio Details</li>
              </ol>
            </div>

          </div>
        </section>

        <section className="portfolio-details">
          <div className="container">

            <div className="portfolio-details-container">

              <div className="portfolio-info">
                <h3>Current Job Offers</h3>
                <ul>
                  {offers.map(offer => (
                    <li>{offer.role}: {offer.skill}</li>
                  ))}
                  {/* <button onClick={addToCart}>Purchase Premium</button>
                  <button
                    disabled={!cart.find(p => p._id === currentProduct._id)}
                    onClick={removeFromCart}
                  >
                    Remove from Cart
            </button> */}
                </ul>
              </div>

            </div>

            <div className="portfolio-description">
              <h2>About {user.firstName} {user.lastName}</h2>
              <p>
                {user.profileText}
              </p>
            </div>
          </div>
        </section>
      </main>



    </section>

  );
};

export default Profile;
