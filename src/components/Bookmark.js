import React, { Fragment, useContext } from "react";
import { ProductContext } from "./ProductContext";
const BookMark = () => {
  const [, , bookmarked] = useContext(ProductContext);
  console.log(bookmarked);
  return (
    <div className="bookmarks">
      {bookmarked
        ? bookmarked.map((prod, index) => {
            return (
              <Fragment key={index}>
                <div className="bookmark">
                  <p>{prod.name}</p>
                  <p>{prod.brand}</p>
                </div>
              </Fragment>
            );
          })
        : null}
    </div>
  );
};

export default BookMark;
