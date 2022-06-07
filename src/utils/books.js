import axios from "axios";

export const getAllBooks = (page = 1, limit = 4) => {
  //   const pageQuery = /\d+/g.test(page);
  return axios.get(
    `http://localhost:8080/book/all?page=${page}&limit=${limit}`
  );
};
