import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// api url
const url = "/api/airtable-books";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);

  // fetching books
  const fetchBooks = async (url) => {
    try {
      const { data } = await axios.get(url);
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // fetching single book
  const fetchBook = async (url) => {
    try {
      setLoading(true)
      const { data } = await axios.get(url);
      setBook(data);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks(url);
  }, []);

  // useEffect(() => {
  //   if (!bookId) return;
  //   fetchBooks(`${url}?id=${bookId}`);
  // }, [bookId]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        book,
        fetchBook,
        setBook,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
