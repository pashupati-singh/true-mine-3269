import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST} from "./actionTypes"; 



export const getProducts = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes", obj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

