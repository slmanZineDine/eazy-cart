import AnimatedCounter from "@/components/common/counter/AnimatedCounter";

const Statistics = () => {
  // ################### DATA ###################
  const data = [
    {
      id: 1,
      title: "Glorious years",
      hasDecimal: false,
      amount: 10,
      suffix: "Y",
    },
    {
      id: 2,
      title: "Happy clients",
      hasDecimal: true,
      amount: 30_000,
      suffix: "C",
    },
    {
      id: 3,
      title: "Projects complete",
      hasDecimal: true,
      amount: 12,
      suffix: "P",
    },
    {
      id: 4,
      title: "Products Sale",
      hasDecimal: true,
      amount: 100_000,
      suffix: "P",
    },
  ];

  return (
    <section className="section-padding">
      <div className="bg-cardLighter container grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-center relative h-32 flex-col bg-background p-4 text-center before:absolute before:bottom-0 before:left-0 before:h-0 before:w-1 before:bg-primary before:transition-[height] before:duration-300 before:content-[''] after:absolute after:right-0 after:top-0 after:h-0 after:w-1 after:bg-primary after:transition-[height] after:duration-300 after:content-[''] hover:before:h-full hover:after:h-full"
          >
            <span className="text-xl">
              <AnimatedCounter
                amount={item.amount}
                suffix={` ${item.suffix}`}
                hasDecimal={item.hasDecimal}
              />
            </span>
            <h3 className="mt-2 italic text-primary">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
