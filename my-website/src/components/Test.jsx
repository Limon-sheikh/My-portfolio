import HeroData from "../data/hero";
import Typewriter from "./components/Typewriter";

const Test = () => {

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-black">
      <Typewriter text="Hello, I'm Limon Sheikh!" speed={5} />
    </div>

    </>
  );
};

export default Test;
