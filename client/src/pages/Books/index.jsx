import { Link, Outlet } from "react-router-dom";

export default function Books(props) {
  return (
    <section>
      <div className="container py-6">
        <Outlet />
      </div>
    </section>
  );
}
