import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { QUERY_USER, QUERY_ME_BASIC, QUERY_PRODUCT } from "../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import Cart from '../components/Cart';
import Auth from '../utils/auth';
import Header from '../components/Header';
// import { idbPromise } from "../utils/helpers";
import spinner from '../assets/spinner.gif';
import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_OFFERS,
  UPDATE_IMAGE,
  UPDATE_PRODUCT,
  UPDATE_USER_JOBS
} from '../utils/actions';


const Profile = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { offers, product, cart, user_jobs } = state;
  const { id: userParam } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});


  const { productData } = useQuery(QUERY_PRODUCT);

  console.log("all products", productData)
  const [currentupload, setCurrentupload] = useState({});
  // const [currentjobs, setCurrentjob] = useState({});

  const { loading, data: userData } = useQuery(userParam ? QUERY_USER : QUERY_ME_BASIC, {
    variables: { id: userParam }
  });

  const user = userData?.me || userData?.user || {};
  


  console.log("navigatedprofile", user.upload===null)

  useEffect(() => {
    if (user.upload) {
      setCurrentupload(require(`../assets/images/${userData.me.upload.path.split("/")[5]}`))
      console.log("meconsol", userData.me.upload.path.split("/"));
    }
    else{
      setCurrentupload(user.image);
    }
  }, [userData, setCurrentupload]);

  useEffect(() => {
    if (userData) {
      dispatch({
        type:UPDATE_USER_JOBS,
        user_jobs: user.jobs
      })
    }
  }, [userData, dispatch]);

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

let imageRendered
try {
  if(currentupload.default) {
    imageRendered = currentupload.default
  }
  else{
    imageRendered = currentupload;
  }
}
catch(e) {
  console.log(e)
}
  
  console.log("rnedered", user);
  console.log("rnedered", currentupload);


  return (

    <section style={{ margin: 0 }}>

      <Header
       image={imageRendered}
        firstName={user.firstName}
        lastName={user.lastName}
        role=''
      ></Header>
      <main id="main">
        <section className="breadcrumbs" style={{marginBottom:40}}>
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfolio Details</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Portfolio</Link></li>
                <li>Portfolio Details</li>
              </ol>
            </div>

          </div>
        </section>

        <section className="portfolio-details" >
          <div className="container">

            <div className="portfolio-details-container"style={{paddingTop:40}}>

              <div className="row">
                <div className="col-md-3">
                  <div className="portfolio-info">
                    <h3>Current Listed Jobs</h3>
                    <ul>
                      {user_jobs.map(job => ( 
                       <li key={job._id}>{job.role}</li> 
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="portfolio-info">
                    <h3>Current Job Offers</h3>
                    <ul>
                      {/* {offers.map(offer => ( */}
                      {/* <li>{offer.role}: {offer.skill}</li> */}
                      {/* ))} */}
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
                <div className="col-md-11">
                  <div className="portfolio-info">
                    <h3>Current Job Offers</h3>
                    <ul>
                      {/* {offers.map(offer => ( */}
                      {/* <li>{offer.role}: {offer.skill}</li> */}
                      {/* ))} */}
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
              </div>



            </div>

            <div className="portfolio-description" style={{paddingTop:150}}>
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
