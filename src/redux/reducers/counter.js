import {
  counterDownAction,
  counterUpAction,
} from "../actionCreator/actionString";

const initialState = {
  number: 0,
};

const counterReducer = (prevState = initialState, action) => {
  /**
   * action
   * {
   *  type: "COUNTER_UP" | "COUNTER_DOWN"
   * }
   */
  switch (action.type) {
    case counterUpAction:
      // number = number dari state lama + action.payload
      return { ...prevState, number: prevState.number + action.payload };

    case counterDownAction:
      // number = number dari state lama - 1
      return { ...prevState, number: prevState.number - 1 };

    default:
      // tidak ada perubahan state
      return prevState;
  }
};

export default counterReducer;
