import {
  FaHome,
  FaShoppingCart,
  FaWallet,
  FaUsers,
  FaCog
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[260px] glass border-r border-white/10 p-6">

      <h1 className="text-3xl font-black gradient-text mb-10">
        BloomPanel
      </h1>

      <div className="space-y-4">

        <button className="w-full flex items-center gap-4 bg-cyan-500/20 hover:bg-cyan-500/30 transition p-4 rounded-2xl">
          <FaHome />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition p-4 rounded-2xl">
          <FaShoppingCart />
          New Order
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition p-4 rounded-2xl">
          <FaWallet />
          Add Funds
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition p-4 rounded-2xl">
          <FaUsers />
          Services
        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition p-4 rounded-2xl">
          <FaCog />
          Settings
        </button>

      </div>

    </div>
  );
}