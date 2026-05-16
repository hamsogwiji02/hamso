import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20 bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Grow Your <span className="gradient-text">Social Media</span> Faster
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Buy followers, likes, views and boost your social media presence instantly.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-cyan-500 px-7 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Get Started
            </button>

            <button className="glass px-7 py-4 rounded-2xl">
              View Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
          className="glass p-8 rounded-[30px]"
        >
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
            alt=""
            className="rounded-3xl"
          />
        </motion.div>

      </div>
    </section>
  );
}