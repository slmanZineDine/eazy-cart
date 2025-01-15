// My-Components
import CurrentYear from "./CurrentYear";

const BottomFooter = () => {
  return (
    <div className="flex-between container flex-col gap-2 border-t-2 pt-4 md:flex-row max700:pb-headerHeight">
      <p></p>
      <p className="text-center">
        Copyright © <CurrentYear /> &nbsp;
        <a
          href="https://slmanzinedine.vercel.app/"
          className="font-bold text-primary"
          target="_blank"
        >
          Slman Zinedine
        </a>
        . All Right Reserved
      </p>
      <p>
        Made with ❤ By &nbsp;
        <a
          href="https://slmanzinedine.vercel.app/"
          className="font-bold text-primary"
          target="_blank"
        >
          Slman Zinedine
        </a>
      </p>
    </div>
  );
};

export default BottomFooter;
