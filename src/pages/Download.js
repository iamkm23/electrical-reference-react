import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/context.js";
import { Link } from "react-router-dom";

const Download = () => {
  const { loading, books } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <div className="section-center">
          <h1>loading...</h1>
        </div>
      </section>
    );
  }
  return (
    <section className="section">
      <section className="section-center">
        <h1 className="download-title">Downloads</h1>

        <article className="books-container">
          {books.map((download) => {
            const { id, title, author, book_cover } = download;
            return (
              <div key={id} className="book">
                <Link to={`/download/${id}`}>
                  <img src={book_cover} alt="id" className="book-cover" />
                </Link>

                <h1>{title}</h1>
                <div className="author">by {author}</div>
              </div>
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default Download;
