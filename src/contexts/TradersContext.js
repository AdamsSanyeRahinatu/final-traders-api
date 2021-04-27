import { createContext, useReducer } from "react";
import tradersReducer from "../reducers/tradersReducer";
import axios from "axios";

const initialState = {
  loading: true,
  trainees: [],
  error: null,
};

export const TradersContext = createContext();

const TradersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tradersReducer, initialState);
  // get all traders
  async function getTraders() {
    const res = await axios.get(
      "https://traineesapi-dodoo.herokuapp.com/api/v1/trainees"
    );
    try {
      dispatch({
        type: "GET_ALL_TRADERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TradersContext.Provider
      value={{ getTraders, traders: state.traders, loading: state.loading }}
    >
      {children}
    </TradersContext.Provider>
  );
};

export default TradersContextProvider;
