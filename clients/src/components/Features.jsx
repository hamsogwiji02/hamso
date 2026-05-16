import { FaRocket, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function Features() {

  const features = [
    {
      icon:<FaRocket />,
      title:"Fast Delivery",
      desc:"Instant order processing with lightning speed."
    },
    {
      icon:<FaShieldAlt />,
      title:"Secure Payments",
      desc:"Protected transactions and encrypted accounts."
    },
    {
      icon:<FaBolt />,
      title:"Real-Time Updates",
      desc:"Track your orders live from dashboard."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-black">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((item,index)=>(
            <div key={index} className="glass p-10 rounded-3xl">

              <div className="text-5xl text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}