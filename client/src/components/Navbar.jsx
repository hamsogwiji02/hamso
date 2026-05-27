import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 glass">
      <h1 className="text-2xl font-bold text-cyan-400">
        TRYME PAL
      </h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}