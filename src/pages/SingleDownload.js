import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const SingleDownload = () => {
  const { bookId } = useParams();

  const { book, fetchBook, loading } = useGlobalContext();
  useEffect(() => {
    fetchBook(`/api/airtable-books?id=${bookId}`);
  }, []);

  // const book = books.find((book) => book.id === bookId);
  // const { title, author, book_cover, download_url, category } = book;
  // console.log(download_url);

  if (loading || book === null) {
    return (
      <section className="section">
        <section className="section-center">
          <h2>loading...</h2>
        </section>
      </section>
    );
  }

  const { fields } = book;
  const {
    title,
    author,
    book_cover,
    download_url,
    category,
    published_on,
    description,
  } = fields;

  return (
    <section className="section">
      <section className="section-center">
        <h2 className="book-title">{title}</h2>
        <div className="book-container">
          <img src={book_cover[0].url} alt="id" className="single-book-cover" />
          <div>
            <h1>{title}</h1>
            <p>Author: {author}</p>
            <p>Category: {category}</p>
            <p>Published on: {published_on}</p>
            <p>Description: <br></br>{description}</p>
            <a href={download_url[0].url}>
              <button className="btn-download">download</button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SingleDownload;
