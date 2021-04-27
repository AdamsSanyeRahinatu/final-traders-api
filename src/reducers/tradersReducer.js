const tradersReducer = (state, action) => {
  switch(action.type) {
      case "GET_ ALL_TRADERS":
      return {
          ...state,
          traders: action.payload,
          loading:false
      };
      default:
          return state
  };
};
export default tradersReducer;