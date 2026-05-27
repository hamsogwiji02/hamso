export default function Features() {
  const items = [
    "Real Engagement",
    "Earn Credits",
    "Boost Videos",
    "Support Creators"
  ];

  return (
    <section className="grid md:grid-cols-4 gap-6 p-10">
      {items.map((item, i) => (
        <div key={i} className="glass rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold">{item}</h2>
        </div>
      ))}
    </section>
  );
}