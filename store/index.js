import { createStore } from "redux";

const reducer = (
  state = { name: "", sign: false, test: 0, out: true, nameSave: false },
  action
) => {
  if (action.type === "name") {
    return {
      name: action.name,
      sign: state.sign,
      test: state.test,
      out: state.out,
    };
  }

  if (action.type === "login") {
    return {
      sign: action.sign,
      name: state.name,
      test: state.test,
      out: state.out,
    };
  }

  if (action.type === "logout") {
    return {
      sign: state.sign,
      name: state.name,
      test: state.test,
      out: action.connect,
    };
  }

  if (action.type === "test") {
    return {
      test: state.test + 1,
      name: state.name,
      sign: state.sign,
      out: state.out,
    };
  }

  if (action.type === "nameSave") {
    return {
      nameSave: !state.nameSave,
      test: state.test,
      name: state.name,
      sign: state.sign,
      out: state.out,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
