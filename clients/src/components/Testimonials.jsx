export default function Testimonials() {

  const reviews = [
    {
      name:"James",
      text:"Best SMM panel I have used so far."
    },
    {
      name:"Aisha",
      text:"Orders are very fast and support is amazing."
    },
    {
      name:"Kevin",
      text:"Modern dashboard and easy to use."
    }
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-black">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {reviews.map((review,index)=>(
            <div key={index} className="glass p-8 rounded-3xl">

              <h3 className="text-2xl font-bold">
                {review.name}
              </h3>

              <p className="text-gray-300 mt-4">
                "{review.text}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}