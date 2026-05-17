import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#050816]">
      <div className="glass w-full max-w-md p-10 rounded-[30px]">

        <h1 className="text-4xl font-black text-center gradient-text mb-8">
          Welcome Back
        </h1>

        <form className="space-y-5">

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

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-2xl font-bold">
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-cyan-400">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}