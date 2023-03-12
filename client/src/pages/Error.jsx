import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <section>
      <div className="container py-4">
        <pre className="overflow-auto bg-red-50 text-red-500 p-5 rounded-md m-1">
          {JSON.stringify(error, "___", 3)}
        </pre>
      </div>
    </section>
  );
}
