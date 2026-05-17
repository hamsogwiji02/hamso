import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#050816]">
      <div className="glass w-full max-w-md p-10 rounded-[30px]">

        <h1 className="text-4xl font-black text-center gradient-text mb-8">
          Create Account
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none"
          />

          <button className="w-full bg-purple-500 hover:bg-purple-400 transition py-4 rounded-2xl font-bold">
            Register
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}