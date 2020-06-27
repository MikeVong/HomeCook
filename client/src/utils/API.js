import axios from "axios";

export default {
  // Gets all Cooks
  getCooks: function() {
    return axios.get("/api/cooks");
  },
  // Gets the cook with the given id
  getOneCook: function(id) {
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
