"use client";

import { usePathname, useSearchParams } from "next/navigation";
// Third-Party =====>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// icons
import { Gem, Grid2x2, PersonStanding, Plug, Shirt } from "lucide-react";
import Link from "next/link";

const Categories = () => {
  // ################### DATA ###################
  const categories = [
    {
      id: 1,
      title: "All",
      icon: <Grid2x2 size={34} className="text-primary" />,
    },
    {
      id: 2,
      title: "Men's Clothing",
      icon: <Shirt size={34} className="text-primary" />,
    },
    {
      id: 3,
      title: "Women's Clothing",
      icon: <PersonStanding size={34} className="text-primary" />,
    },
    {
      id: 4,
      title: "Jewelery",
      icon: <Gem size={34} className="text-primary" />,
    },
    {
      id: 5,
      title: "Electronics",
      icon: <Plug size={34} className="text-primary" />,
    },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="mx-8 mb-10"
    >
      <CarouselContent className="group p-2">
        {categories.map((category, index) => (
          <CarouselItem key={category.id} className="basis-40">
            <Link
              className={`flex-between h-full cursor-pointer flex-col gap-2 rounded-xl p-4 text-center transition-all hover:bg-background hover:shadow-md hover:shadow-black/50 ${index % 2 === 0 ? "bg-cardLight" : "bg-cardLighter"}`}
              href={createPageURL(category.title)}
              scroll={false}
              prefetch={false}
            >
              {category.icon}{" "}
              <h3 className="text-md font-bold text-secondary">
                {category.title}
              </h3>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Categories;