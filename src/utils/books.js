import axios from "axios";

export const getAllBooks = (page = 1, limit = 4) => {
  //   const pageQuery = /\d+/g.test(page);
  return axios.get(
    `${process.env.REACT_APP_HOST}/book/all?page=${page}&limit=${limit}`
  );
};
