import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import BookCard from "../../components/cards/BookCard";
import { authorQuery } from "../../service/graphQL";
import { DOMAIN } from "../../utils/constants";

export default function Author() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(authorQuery(id));
  const { author } = data || {};
  if (loading) return "Loading...";
  if (error || (author === null && !loading)) {
    return (
      <pre className="text-rose-500 bg-rose-50 border border-rose-300 font-mono font-medium p-2 m-2 overflow-auto rounded-md">
        {JSON.stringify({ code: 404, message: "Not Found" }, null, 4)}
      </pre>
    );
  }
  return (
    <>
      <section>
        <div className="py-4 px-2 md:px-10 flex flex-wrap gap-2 grid-cols-1 bg-indigo-500 rounded-md">
          <img
            src={`${DOMAIN}/author.webp`}
            alt="author"
            className=" h-40 w-40 rounded-full object-contain bg-white "
          />
          <div className="md:pl-4">
            <h3 className="text-white">{author.name}</h3>
            <h6 className="text-white">Age : {author.age}</h6>
          </div>
        </div>
      </section>
      <section>
        <div className="py-6">
          <h2>Books from {author?.name}</h2>
          <ul className="mt-3 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {author?.books?.map((book) => (
              <Link to={`/books/${book.id}`}>
                <BookCard book={{...book,author}} />
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
