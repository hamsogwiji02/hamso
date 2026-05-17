import DashboardLayout from "../layouts/DashboardLayout";

const services = [
  {
    name: "Instagram Followers",
    price: "$2 / 1000"
  },
  {
    name: "TikTok Views",
    price: "$1 / 1000"
  },
  {
    name: "YouTube Subscribers",
    price: "$10 / 1000"
  },
  {
    name: "Telegram Members",
    price: "$5 / 1000"
  }
];

export default function ServicesPage() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-black mb-10 gradient-text">
        Services
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="glass p-8 rounded-[30px]"
          >
            <h2 className="text-2xl font-black mb-4">
              {service.name}
            </h2>

            <p className="text-cyan-300 text-lg mb-6">
              {service.price}
            </p>

            <button className="bg-cyan-500 px-6 py-3 rounded-xl font-bold">
              Order Now
            </button>
          </div>
        ))}

      </div>

    </DashboardLayout>
  );
}