import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex-center section-padding min-h-mainHeight bg-heroGradient min90rem:min-h-fit min90rem:py-16">
      <div className="flex-between container flex-col gap-8 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold leading-snug text-primary md:text-4xl lg:text-6xl">
            <span className="text-secondary">Online Store Of</span> Products
            With Delivery
          </h2>
          <p className="mt-4 indent-8 text-sm text-muted-foreground md:mt-8 md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            nulla. Itaque eum, pariatur labore amet sed voluptates totam animi
            error aliquid minima quis eveniet, perspiciatis, modi odio
            consequatur repellendus laudantium!
          </p>
        </div>
        <div>
          <Image
            width={550}
            height={350}
            src="/assets/images/hero-section.png"
            alt="Employees use labtops"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
