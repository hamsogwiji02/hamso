export default function Stats() {

  const stats = [
    { number:"500K+", label:"Orders Completed" },
    { number:"25K+", label:"Happy Clients" },
    { number:"120+", label:"Services" },
    { number:"24/7", label:"Support" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {stats.map((item,index)=>(
          <div key={index} className="glass p-8 rounded-3xl text-center">
            <h2 className="text-4xl font-black gradient-text">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}