import DashboardLayout from "../layouts/DashboardLayout";

export default function NewOrder() {
  return (
    <DashboardLayout>

      <div className="glass p-8 rounded-[30px] max-w-3xl">

        <h1 className="text-4xl font-black mb-8 gradient-text">
          Create New Order
        </h1>

        <form className="space-y-6">

          <select className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl outline-none">
            <option>Instagram Followers</option>
            <option>TikTok Views</option>
            <option>YouTube Subscribers</option>
          </select>

          <input
            type="text"
            placeholder="Enter Link"
            className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl outline-none"
          />

          <input
            type="number"
            placeholder="Quantity"
            className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl outline-none"
          />

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-bold">
            Submit Order
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
}