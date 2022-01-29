import React, { Fragment, useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import "./../css/bookmark.css";

const BookMark = () => {
  const [, , bookmarked] = useContext(ProductContext);
  console.log(bookmarked);
  return (
    <div className="bookmarks">
      {bookmarked
        ? bookmarked.map((prod, index) => {
            return (
              <Fragment key={index}>
                <div className="bookmark" key={prod.id}>
                  <img src={prod.image} alt={prod.title} width="250px" />
                  <p>{prod.title}</p>
                  <button>Remove bookmark</button>
                </div>
              </Fragment>
            );
          })
        : null}
    </div>
  );
};

export default BookMark;
