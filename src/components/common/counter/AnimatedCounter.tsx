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
        duration={4}
        decimals={hasDecimal ? 2 : undefined}
        decimal={hasDecimal ? "." : undefined}
        suffix={suffix}
        end={amount}
        enableScrollSpy={true}
      />
    </div>
  );
};

export default AnimatedCounter;
