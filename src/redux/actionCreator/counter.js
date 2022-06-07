import { counterDownAction, counterUpAction } from "./actionString";
/**counter
 * 1. counter up
 * 2. counter down
 */

export const counterUp = (num) => {
  // return object action
  // object action berisikan informasi
  return {
    type: counterUpAction,
    payload: num
  };
};

export const counterDown = () => {
  return {
    type: counterDownAction,
  };
};
