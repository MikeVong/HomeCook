import axios from "axios";

export default {
  // Gets all books
  getCooks: function() {
    return axios.get("/api/cooks");
  },
  // Gets the book with the given id
  getCook: function(id) {
    return axios.get("/api/cooks/" + id);
  },
  // Deletes the book with the given id
  deleteCook: function(id) {
    return axios.delete("/api/cooks/" + id);
  },
  // Saves a book to the database
  saveCook: function(cookData) {
    return axios.post("/api/cooks", cookData);
  }
};
