const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "Get_Stories":
      return {
        ...state,
        hits: action.payLoad.hits,
        nbPages: action.payLoad.nbPages,
        isLoading: false,
      };
    case "Remove_post":
      return {
        ...state,
        hits: state.hits.filter((getId) => getId.objectID != action.payLoad),
      };
    case "Search_Post":
      return {
        ...state,
        query: action.payLoad,
      };
    case "Next_Value":
      let nextNum = state.page;
      if (nextNum >= state.nbPages) {
        nextNum = 0;
      } else {
        nextNum = nextNum + 1;
      }
      return {
        ...state,
        page: nextNum,
      };
    case "Prev_Value":
      let prevNum = state.page;
      if (prevNum <= 0) {
        prevNum = 0;
      } else {
        prevNum = prevNum - 1;
      }
      return {
        ...state,
        page: prevNum,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
