import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { authorsQuery } from "../../service/graphQL";

export function AllAuthors() {
  const { loading, error, data } = useQuery(authorsQuery());
  const { authors } = data || {};
  console.log(data, error);
  if (loading) return "Loading...";
  if (error)
    return (
      <pre className="text-rose-500 bg-rose-50 border border-rose-300 font-mono font-medium p-2 m-2 overflow-auto rounded-md">
        {JSON.stringify(error, null, 4)}
      </pre>
    );
  return (
    <section>
      <ul className="list-decimal">
        {authors?.map((author) => (
          <li className="mb-1">
            <Link
              to={`/authors/${author.id}`}
              className="text-sky-500 hover:text-sky-900 font-semibold"
            >
              {author?.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
