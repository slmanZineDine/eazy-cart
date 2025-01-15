// Third-Party =====> shadcn-ui
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// My-Components
import SectionTitle from "@/components/common/sectionTitle";
// Icons
import {
  Gift,
  HandCoins,
  PackageOpen,
  Smile,
  ThumbsUp,
  Truck,
} from "lucide-react";

const Features = () => {
  // ################### DATA ###################
  const features = [
    { id: 1, title: "Best Prices & Offers", icon: <Gift size={32} /> },
    { id: 2, title: "Wide Assortment", icon: <PackageOpen size={32} /> },
    { id: 3, title: "Free Delivery", icon: <Truck size={32} /> },
    { id: 4, title: "Easy Returns", icon: <HandCoins size={32} /> },
    { id: 5, title: "100% Satisfaction", icon: <Smile size={32} /> },
    { id: 6, title: "Great Daily Deal", icon: <ThumbsUp size={32} /> },
  ];
  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title="What We"
          mainWord="Provide?"
          className="text-center"
          hasSubTitle={true}
        />
        <div className="mt-16 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="relative rounded-md border border-secondary"
            >
              <div className="flex-center absolute left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary bg-background text-primary">
                {feature.icon}
              </div>
              <CardHeader className="pt-12">
                <CardTitle className="text-center text-xl font-bold text-secondary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti porro consequatur amet nulla maxime.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="mx-auto bg-[#d4eee2] text-primary hover:bg-[#d4eee2]/90">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
