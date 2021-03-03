import {
  UPDATE_JOBS,
  UPDATE_CURRENT_JOB,
  UPDATE_SKILLS,
  UPDATE_CURRENT_SKILL,
  UPDATE_OFFERS,
  UPDATE_CURRENT_USER,
  CLEAR_CART,
  TOGGLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
  UPDATE_CART_QUANTITY,
  UPDATE_USER_JOBS,
  UPDATE_APPLICANTS,
  UPDATE_APPLIED,
} from "./actions";

const initialState = {
  jobs: [],
  skills: [],
  currentSkill: "",
  currentJob: "",
  offers: [],
  cart: [],
  product: [],
  user_jobs: [],
  applicants: [],
  applied: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_JOBS:
      return {
        ...state,
        jobs: [...action.jobs],
      };

    case UPDATE_CURRENT_JOB:
      return {
        ...state,
        currentJob: action.currentJob,
      };

    case UPDATE_SKILLS:
      return {
        ...state,
        skills: [...action.skills],
      };

    case UPDATE_CURRENT_SKILL:
      return {
        ...state,
        currentSkill: action.currentSkill,
      };
    case UPDATE_OFFERS:
      return {
        ...state,
        offers: [...action.offers],
      };

    case UPDATE_CURRENT_USER:
      return {
        ...state,
        cuurentUser: action.currentUser,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        product: action.product,
      };

    case UPDATE_USER_JOBS:
      return {
        ...state,
        user_jobs: [...action.user_jobs],
      };
    case UPDATE_APPLIED:
      return {
        ...state,
        applied: [...action.applied],
      };

    case UPDATE_APPLICANTS:
      return {
        ...state,
        applicants: [...action.applicants],
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export default reducers;
