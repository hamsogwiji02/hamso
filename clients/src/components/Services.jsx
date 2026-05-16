export default function Services() {

  const services = [
    "Instagram Followers",
    "TikTok Views",
    "YouTube Subscribers",
    "Facebook Likes",
    "Spotify Streams",
    "Telegram Members"
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center">
          Popular Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {services.map((service,index)=>(
            <div
              key={index}
              className="glass p-8 rounded-3xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold">
                {service}
              </h3>

              <p className="text-gray-300 mt-4">
                Premium quality delivery and fast processing.
              </p>

              <button className="mt-6 bg-cyan-500 px-5 py-3 rounded-xl font-bold">
                Order Now
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}