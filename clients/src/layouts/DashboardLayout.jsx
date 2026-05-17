import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <div className="flex-1 ml-[260px]">
        <Topbar />

        <div className="p-8">
          {children}
        </div>
      </div>

    </div>
  );
}