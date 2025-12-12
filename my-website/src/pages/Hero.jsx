import HeroData from "../data/hero";
import Button from "../components/Navber/Button";
import "../App.css"; //custome typewriter

const Home = () => {
  const {hello, limon, sheikh, title, titleName, description, socials, image} = HeroData[0];

  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] w-full overflow-hidden sm:w-full md:w-full lg:w-full sm:bg-orange-500">
      <div className="container mx-auto min-h-[calc(100vh-80px)]    sm:bg-pink-400">
        <div id="wraper" className="px-5 md:px-0 md:grid md:grid-cols-12     sm:bg-green-500 ">
          <div className="pt-10 flex flex-col md:col-span-6      sm:bg-yellow-300 ">
            <div className="sm:bg-yellow-600 ">
              <h1 className="text-[14vw] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ">
                {hello} <br />
                <span className="text-accent ">{limon}</span>
                <br />
                <span className="text-accent ">{sheikh}</span>
              </h1>
              {/* typewriter */}
              <div className="mt-10 flex items-center flex-wrap gap-1 py-1      sm:bg-red-300">
                <span className="text-[14px] opacity-60 font-medium">{title}</span>
                <div className="w-56 sm:w-72 md:w-[16.5rem] flex items-center overflow-hidden overw whitespace-nowrap">
                  <div className="inline-block">
                    <span className="text-xl sm:text-2xl flex items-center font-bold typewriter">{titleName}</span>
                  </div>
                </div>
              </div>
              <div className=" py-2 min-h-28 md:min-h-0 sm:bg-slate-400">
                <p className="text-justify text-base font-medium opacity-60">{description}</p>
              </div>
            </div>

            <div className="mt-[11vh] sm:bg-yellow-900 ">
              <div className="grid grid-flow-col justify-between md:justify-start md:gap-6 py-2">
                {socials.map((social, index) => (
                  <a key={index} href={social.link} target="_blank"
                    style={{borderColor: social.color, transition: "all 0.4s ease-in-out"}}
                    className="p-2 border rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.firstChild.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.firstChild.style.color = social.color;
                    }}
                  >
                    <social.icon style={{color: social.color, transition: "all 0.4s ease-in-out"}} size={26}/>
                  </a>
                ))}
              </div>

              <div className="flex justify-between gap-4 sm:flex-row sm:justify-start sm:gap-16 py-8  sm:bg-orange-800">
                <Button title="view more" border={false}
                  className="bg-accent text-gray px-7 py-2 font-semibold text-[4vw] md:text-xl hover:bg-hover
                    transition-all duration-150 ease-linear rounded-md "
                />
                <Button title="Downlod Cv" border={true}
                  className="border-accent text-gray px-7 py-2 font-semibold text-[4vw] md:text-xl hover:bg-accent
                  transition-all duration-150 ease-linear border-2 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-span-6   bg-blue-400">
            <div className="h-[100%] w-[100%]">
              <img src={image} alt="hero image" className="w-[100%] h-[100%]" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Home;
