// import { Directions, Languages } from "@/constants/enums";
import * as motion from "motion/react-client";

const SplitText = ({ text }) => {
  return (
    <div
      style={{
        // direction:
        //   locale === Languages.ARABIC ? Directions.RTL : Directions.LTR,
        unicodeBidi: "plaintext",
      }}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", marginLeft: "6px" }}
        >
          <motion.span
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ delay: wordIndex * 0.1, duration: 0.6 }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default SplitText;
