import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold gradient-text">
          BloomPanel
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-cyan-500 px-5 py-2 rounded-xl font-bold">
          Login
        </button>

        <FaBars
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 p-6 glass">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}