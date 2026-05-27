export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="glass p-10 rounded-2xl w-[350px]">
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <button className="bg-cyan-500 w-full py-3 rounded-xl">
          Create Account
        </button>
      </div>
    </div>
  );
}