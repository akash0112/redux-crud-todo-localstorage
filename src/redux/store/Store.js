import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootreducer from "../reducers";

const { createStore, applyMiddleware } = require("redux");
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
export const store=createStore(rootreducer,loadFromLocalStorage(),composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(()=>saveToLocalStorage(store.getState()))