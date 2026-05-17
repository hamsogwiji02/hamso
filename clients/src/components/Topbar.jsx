import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <div className="glass border-b border-white/10 px-8 py-5 flex justify-between items-center sticky top-0 z-40">

      <h2 className="text-2xl font-black">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">
  <ThemeToggle />

      <div className="flex items-center gap-5">

        <div className="bg-cyan-500/20 px-5 py-2 rounded-xl">
          Balance: $120.00
        </div>

        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-black">
          B
        </div>

      </div>

    </div>
  );
}