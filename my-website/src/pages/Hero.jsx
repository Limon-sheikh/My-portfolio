import HeroData from "../data/hero";
import Button from "../components/Navber/Button";
import "../App.css"; //custome typewriter

const Home = () => {
  const {hello, limon, sheikh, title, titleName, description, socials, image,} = HeroData[0];
  
  
  // h-[calc(100vh-90px)], text-[clamp(3rem,11vw,5rem)]
  // <section className="min-h-dvh bg-orange-500"> 


  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] w-full overflow-hidden sm:w-full md:w-full lg:w-full bg-orange-500">
      <div className="container mx-auto min-h-[calc(100vh-80px)] md:flex flex-col justify-center      bg-pink-400">
        <div id="wraper" className="px-5 md:grid md:grid-cols-12     bg-green-500 ">
          <div className="pt-10 xxs:pt-12 flex flex-col md:col-span-6      sm:bg-yellow-300 ">
            <div className="sm:bg-yellow-600 ">
              <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight ">
                {hello} <br />
                <span className="text-accent ">{limon}</span>
                <br />
                <span className="text-accent ">{sheikh}</span>
              </h1>
              {/* typewriter */}
              <div className="mt-10 xxs:pt-12 flex items-center flex-wrap gap-1 py-1      sm:bg-red-300">
                <span className="text-[14px] sm:text-base">{title}</span>
                <div className="w-56 sm:w-72 md:w-[16.5rem] flex items-center overflow-hidden overw whitespace-nowrap">
                  <div className="inline-block">
                    <span className="text-xl sm:text-2xl flex items-center font-bold typewriter">
                      {titleName}
                    </span>
                  </div>
                </div>
              </div>
              <p className="pt-3 text-justify text-base">{description}</p>
            </div>

            <div className="mt-10 sm:bg-yellow-900 ">
              <div className="grid grid-flow-col justify-between md:justify-start md:gap-6 py-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    style={{
                      borderColor: social.color,
                      transition: "all 0.4s ease-in-out",
                    }}
                    className="p-2 border border-black rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.firstChild.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.firstChild.style.color = social.color;
                    }}
                  >
                    <social.icon
                      style={{
                        color: social.color,
                        transition: "all 0.4s ease-in-out",
                      }}
                      size={20}
                    />
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-start sm:gap-16 py-5   sm:bg-orange-800">
                <Button
                  title="view more"
                  border={false}
                  className="
                    bg-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-hover
                    transition-all duration-150 ease-linear "
                />
                <Button
                  title="Downlod Cv"
                  border={true}
                  className="border-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-accent
                  transition-all duration-150 ease-linear border-2"
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
    </section>
  );
};

export default Home;
