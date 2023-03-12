import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import BookCard from "../../components/cards/BookCard";
import { bookQuery } from "../../service/graphQL";
import { DOMAIN } from "../../utils/constants";

export default function Book(props) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(
    bookQuery(id, "name,id,genre,author{name,id,books{name,genre,id}}")
  );
  const {author}=data?.book||{};
  if (loading) return "Loading...";
  if (error || (data?.book === null && !loading)) {
    return (
      <pre className="text-rose-500 bg-rose-50 border border-rose-300 font-mono font-medium p-2 m-2 overflow-auto rounded-md">
        {JSON.stringify({ code: 404, message: "Not Found" }, null, 4)}
      </pre>
    );
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src={`${DOMAIN}/book.jpg`} alt="Book" />
            <div className="lg:cols-span-2">
              <h1>{data?.book?.name}</h1>
              <Link to={`/authors/${author?.id}`}>
                {author?.name}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-6">
          <h2>More Books from {author?.name}</h2>
          <ul className="mt-3 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {author?.books
              ?.filter((e) => e.id !== data?.book?.id)
              ?.map((book) => (
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
