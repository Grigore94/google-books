import axios from "axios";

export default {
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    saveOne: function(saveOne) {
        return axios.post("/api/books/", saveOne);
    },
    deleteOne: function(id) {
        return axios.delete("/api/books/" + id);
    }
}