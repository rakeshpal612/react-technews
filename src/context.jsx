import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let fetchApi = "https://hn.algolia.com/api/v1/search?";
let initialState = {
  isLoading: true,
  page: 0,
  nbPages: 0,
  query: "HTML",
  hits: [],
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // let isLoading = true;
  const fetchApiData = async (url) => {
    dispatch({
      type: "Set_Loading",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "Get_Stories",
        payLoad: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      // isLoading = false;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (curId) => {
    dispatch({
      type: "Remove_post",
      payLoad: curId,
    });
  };

  const searchPost = (searchVal) => {
    dispatch({
      type: "Search_Post",
      payLoad: searchVal,
    });
  };

  const getPrev = () => {
    dispatch({
      type: "Prev_Value",
    });
  };

  const getNext = () => {
    dispatch({
      type: "Next_Value",
    });
  };

  useEffect(() => {
    fetchApiData(`${fetchApi}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrev, getNext }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
