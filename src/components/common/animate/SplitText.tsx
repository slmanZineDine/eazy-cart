import * as motion from "motion/react-client";

const SplitText = ({ text }) => {
  return (
    <div>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ delay: index * 0.05, duration: 0.8 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
