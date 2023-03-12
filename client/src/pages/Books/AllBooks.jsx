import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import BookCard from "../../components/cards/BookCard";
import { booksQuery } from "../../service/graphQL";

export function AllBooks() {
  const { loading, error, data } = useQuery(booksQuery());
  const { books } = data || {};
  if (loading) return "Loading...";
  if (error)
    return (
      <pre className="text-rose-500 bg-rose-50 border border-rose-300 font-mono font-medium p-2 m-2 overflow-auto rounded-md">
        {JSON.stringify(error, null, 4)}
      </pre>
    );
  return (
    <ul className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {books.map((book) => (
        <Link to={`/books/${book.id}`}>
          <BookCard book={book} />
        </Link>
      ))}
    </ul>
  );
}
