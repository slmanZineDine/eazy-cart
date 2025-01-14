// Next
import Image from "next/image";
// Icons
import { Star } from "lucide-react";

type TStarsRatingProps = {
  rating: number;
};

const StarsRating = ({ rating }: TStarsRatingProps) => {
  // ################### DATA ###################
  const stars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;

    if (index <= Math.floor(rating))
      return <Star key={index} size={20} fill="#fb9419" color="#fb9419" />;
    else if (Math.ceil(rating) === index && rating % 1 > 0.4)
      return (
        <Image
          key={index}
          height={20}
          width={20}
          src="/assets/svg/half-star.svg"
          alt="Half-star-icon"
        />
      );
    else return <Star key={index} size={20} color="#fb9419" />;
  });

  return (
    <ul className="flex items-center gap-px">
      {stars.map((star, index) => (
        <li key={index}>{star}</li>
      ))}
    </ul>
  );
};

export default StarsRating;
