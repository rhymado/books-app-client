import { getAllBooks } from "../../utils/books";
import { getBooksAction } from "../actionCreator/actionString";

export const getBooks = () => {
  return {
    type: getBooksAction,
    payload: getAllBooks(),
  };
};

// const getBooksThunk = () => {
//   return (dispatch) => {
//       // async API
//       // dispatch pending
//       // cek keberhasilan
//       // jika berhasil dispatch fulfilled
//       // jika gagal dispatch rejected
//   };
// };
