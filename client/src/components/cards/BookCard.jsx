import React from "react";
import { Link } from "react-router-dom";
import { DOMAIN } from "../../utils/constants";

function BookCard({ book }) {
  return (
    <figure className="rounded-md border border-slate-400 overflow-hidden bg-white hover:shadow-xl hover:shadow-indigo-400/20 duration-200">
      <img src={`${DOMAIN}/book.jpg`} alt="book" className="w-full" />
      <div className="body p-2 ">
        <h4 className="font-semibold tracking-wide text-slate-800">
          {book.name}
        </h4>
        <Link to={`/authors/${book?.author?.id}`} className="inline-block px-2 bg-sky-100 text-sky-800 rounded-md text-sm font-semibold tracking-wide">
            {book?.author?.name}
        </Link>
      </div>
    </figure>
  );
}

export default BookCard;
