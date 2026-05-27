export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-xl">Credits</h2>
          <p className="text-4xl font-bold mt-2">250</p>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h2 className="text-xl">Tasks Completed</h2>
          <p className="text-4xl font-bold mt-2">15</p>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h2 className="text-xl">Reputation</h2>
          <p className="text-4xl font-bold mt-2">98%</p>
        </div>
      </div>
    </div>
  );
}