require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.BASE)
  .table("downloads");

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      const book = await airtable.retrieve(id);
      if (book.error) {
        return {
          statusCode: 404,
          body: `No book with id: ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(book),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      };
    }
  }
  //

  try {
    const { records } = await airtable.list();

    // downloads return from airtable
    const books = records.map((download) => {
      const { id } = download;
      const {
        title,
        author,
        published_on,
        book_cover,
        download_url,
        category,
        description,
      } = download.fields;
      return {
        id,
        title,
        author,
        published_on,
        book_cover: book_cover[0].url,
        download_url: download_url[0].url,
        category,
        description,
      };
    });

    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(books),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
