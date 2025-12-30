import HeroData from "../data/hero";
import Button from "../components/Navber/Button";
import SocialIcon from "../components/hero/SocialIcon";
// import "../App.css"; //custome typewriter
import TypeWriter from "../components/hero/TypeWriter";

const Home = () => {
  const {hello, limon, sheikh, description, image, title} = HeroData[0];

  return (
    <>
      <section id="hero" className="min-h-[calc(100vh-80px)] md:flex md:items-center bg-sec_one_bg_c">
        <div className="container mx-auto">
          <div id="wraper" className="px-5 md:px-0 md:grid md:grid-cols-12 lg:gap-2">
            <div className="pt-[4vh] md:pt-0 flex flex-col md:col-span-6">
              <div className="">
                <h1 className="text-[13vw] mt-8 sm:text-[10vw] md:text-6xl lg:text-7xl font-bold leading-tight ">
                  {hello} <br />
                  <span className="text-accent ">{limon}</span>
                  <br />
                  <span className="text-accent ">{sheikh}</span>
                </h1>
                {/* typewriter */}
                <div className="mt-[9vh] flex items-center flex-wrap gap-1 py-1">
                  <span className="text-sm text-secondary/60 font-medium">{title}</span>
                  <TypeWriter texts= {['front end developer', 'UI/UX designer', 'wordpress developer']}
                    typingSpeed={80} deletingSpeed={50} endDelay={500} startDelay={1000}
                  />
                </div>
                <div className="py-2 min-h-28 md:min-h-0">
                  <p className="text-justify text-base font-medium text-secondary/60">{description}</p>
                </div>
              </div>

              <div className="mt-[14vh] lg:mt-[10vh] flex flex-col gap-[4vh] lg:pb-14">
                <SocialIcon size={22} wrapperClass='flex flex-wrap justify-between md:justify-start gap-2 md:gap-6' 
                  className={`border p-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl`}
                />
                <div className="flex justify-between gap-4 md:justify-start md:gap-9">
                  <Button title="view more" border={false}
                    className="bg-accent text-gray px-7 py-2 font-semibold text-[4vw] sm:text-[3vw] md:text-xl hover:bg-hover
                      transition-all duration-150 ease-linear rounded-md text-text_C_W"
                  />
                  <Button title="Downlod Cv" border={true}
                    className="border-accent text-gray px-7 py-2 font-semibold text-[4vw] sm:text-[3vw] md:text-xl hover:bg-accent
                    transition-all duration-150 ease-linear border-2 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:block md:col-span-6">
              <div className="md:h-full lg:h-full md:flex md:justify-center">
                <img src={image} alt="hero image"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Home;
