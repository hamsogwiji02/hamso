import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {

  const cards = [
    {
      title: "Total Orders",
      value: "12,450"
    },
    {
      title: "Wallet Balance",
      value: "$450"
    },
    {
      title: "Completed Orders",
      value: "11,920"
    },
    {
      title: "Pending Orders",
      value: "530"
    }
  ];

  return (
    <DashboardLayout>

      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="glass p-8 rounded-[30px]"
          >
            <p className="text-gray-400 mb-3">
              {card.title}
            </p>

            <h1 className="text-4xl font-black gradient-text">
              {card.value}
            </h1>
          </div>
        ))}

      </div>

      <div className="glass p-8 rounded-[30px] mt-10">

        <h2 className="text-3xl font-black mb-6">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="pb-4">Service</th>
                <th className="pb-4">Link</th>
                <th className="pb-4">Quantity</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-5">Instagram Followers</td>
                <td>@bloompanel</td>
                <td>5000</td>
                <td className="text-green-400">Completed</td>
              </tr>

              <tr>
                <td className="py-5">TikTok Views</td>
                <td>@viralvideo</td>
                <td>10000</td>
                <td className="text-yellow-400">Pending</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}