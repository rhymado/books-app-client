import {
  getBooksAction,
  PENDING,
  REJECTED,
  FULFILLED,
} from "../actionCreator/actionString";

const initialState = {
  books: [],
  isLoading: false,
  err: null,
};

const bookReducer = (prevState = initialState, action) => {
  // pending: ACTION_NAME_PENDING
  // fulfilled: ACTION_NAME_FULFILLED
  // rejected: ACTION_NAME_REJECTED
  switch (action.type) {
    case getBooksAction + PENDING:
      return { ...prevState, err: null, isLoading: true };

    case getBooksAction + FULFILLED:
      return {
        ...prevState,
        isLoading: false,
        books: action.payload.data.list,
      };

    case getBooksAction + REJECTED:
      return {
        ...prevState,
        isLoading: false,
        err: action.payload,
      };

    default:
      return prevState;
  }
};

export default bookReducer;
