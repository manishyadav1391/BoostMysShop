export default function Problem() {
  const problems = [
    {
      title: "80%",
      desc: "Kirana stores losing to quick commerce",
    },
    {
      title: "10 Min",
      desc: "Customers prefer 10-min delivery apps",
    },
    {
      title: "Offline",
      desc: "Your customers are shopping online",
    },
  ];

  return (
    <section className="py-16 px-5 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">
        The Hard Truth for Local Shops
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {problems.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}