import { useQuery } from "@apollo/client";
import { booksQuery } from "../service/graphQL";

export default function Home(props) {
  const { loading, error, data } = useQuery(booksQuery());
  if (loading) return "Loading...";
  if (error)
    return (
      <pre
        style={{
          fontWeight: "semibold",
          color: "#bb0000",
          padding: 10,
          margin: 10,
          borderRadius: 6,
          border: "2px solid #ff000020",
          overflow:"auto",
          background:"#ff000010"
        }}
      >
        {JSON.stringify(error, null, 4)}
      </pre>
    );
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
