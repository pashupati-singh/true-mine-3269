import {ADD_TO_CART, CLEAR_CART, DECREMENT_QUANTITY, GET_PRODUCT_SUCCESS, INCREMENT_QUANTITY, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE,PRODUCT_REQUEST, REMOVE_ITEM, TOTAL_PRICE} from "./actionTypes"
const initialState={
    products:[],
    isLoading:false,
    isError:false,
    cartArr: [],
    totalPrice: 0,
    totalQuantity:0 
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
    case PRODUCT_REQUEST:{return {
        ...state,isLoading:true
    }}
    case POST_PRODUCT_SUCCESS:{return {
        ...state,isLoading:false,products:[...state.products,payload]
    }}
    case GET_PRODUCT_SUCCESS:{return {
        ...state,isLoading:false,
        products:payload,
    }}

    
    case PRODUCT_FAILURE:{return {
        ...state,isLoading:false,isError:true
    }}
    case PATCH_PRODUCT_SUCCESS:{return {
        ...state, isLoading:false,
       
    }
}
case ADD_TO_CART: {
    console.log(typeof payload);
    const item = state.products.filter((el) => el.id === payload);
    console.log(item, "is single item for addTocart");
    const newCartArr = [...state.cartArr, item[0]];
    console.log(newCartArr);
    return { ...state, isLoading: false, cartArr: newCartArr };
  }
  case REMOVE_ITEM: {
    const newArr = [...state.cartArr];
    const afterRemove = newArr.filter((el) => el.id !== payload);
    return { ...state, isLoading: false, cartArr: afterRemove };
  }
  case CLEAR_CART: {
    return { ...state, isLoading: false, cartArr: [] };
  }
  case INCREMENT_QUANTITY: {
    const updatedQuan = state.cartArr.map((el) =>
      el.id === payload ? { ...el, quantity: el.quantity + 1 } : el
    );
    return { ...state, isLoading: false, cartArr: updatedQuan };
  }
  case DECREMENT_QUANTITY: {
    const updatedQuan = state.cartArr
      .map((el) =>
        el.id === payload ? { ...el, quantity: el.quantity - 1 } : el
      )
      .filter((el) => el.quantity !== 0);
    return { ...state, isLoading: false, cartArr: updatedQuan };
  }
  case TOTAL_PRICE: {
    const {total_price,total_Quantity} = state.cartArr.reduce(
      (accum, curr) =>{ accum.total_price += curr.quantity * curr.price
        accum.total_Quantity+=curr.quantity
        return accum
      },
      {total_price:0,
        total_Quantity:0
      }
    );
    return { ...state, isLoading: false, totalPrice: total_price,totalQuantity:total_Quantity };
  }
    
    default:{return state}
    }
}