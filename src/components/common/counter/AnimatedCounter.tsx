"use client";

// Third-Party =====> react-countup
import CountUp from "react-countup";

const AnimatedCounter = ({
  amount,
  suffix = "",
  hasDecimal = true,
}: {
  amount: number;
  suffix?: string;
  hasDecimal?: boolean;
}) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={hasDecimal ? 2 : undefined}
        decimal={hasDecimal ? "," : undefined}
        suffix={suffix}
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
