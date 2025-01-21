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
import SectionTitle from "@/components/common/section-title";
// Icons
import {
  Gift,
  HandCoins,
  PackageOpen,
  Smile,
  ThumbsUp,
  Truck,
} from "lucide-react";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import getDictionary from "@/utils/translation";

const Features = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { about, common } = await getDictionary(locale);

  // ################### DATA ###################
  const features = [
    { id: 1, title: about.features.bestPricesOffers, icon: <Gift size={32} /> },
    {
      id: 2,
      title: about.features.wideAssortment,
      icon: <PackageOpen size={32} />,
    },
    { id: 3, title: about.features.freeDelivery, icon: <Truck size={32} /> },
    { id: 4, title: about.features.easyReturns, icon: <HandCoins size={32} /> },
    { id: 5, title: about.features.satisfaction, icon: <Smile size={32} /> },
    {
      id: 6,
      title: about.features.greatDailyDeal,
      icon: <ThumbsUp size={32} />,
    },
  ];
  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title={about.featureTitle}
          mainWord={about.featureHighlight}
          className="text-center"
          hasSubTitle={true}
          subTitle={common.subTitle}
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
                <p className="text-center text-md">{common.boxDescription}</p>
              </CardContent>
              <CardFooter>
                <Button className="mx-auto bg-[#d4eee2] text-primary hover:bg-[#d4eee2]/90">
                  {common.readMore}
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
