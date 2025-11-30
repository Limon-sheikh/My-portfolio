import HeroData from "../data/hero";
import Button from "../components/Navber/Button";
import "../App.css"; //custome typewriter

const Home = () => {
  const {hello, limon, sheikh, title, titleName, description, socials, image,} = HeroData[0];
  
  
  // h-[calc(100vh-90px)], text-[clamp(3rem,11vw,5rem)]
  // <section className="min-h-dvh bg-orange-500"> 


  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] md:bg-orange-500">
      <div className="container mx-auto min-h-[calc(100vh-80px)] md:flex flex-col justify-center       md:bg-pink-400">
        <div id="wraper" className="px-5 md:px-0 md:grid md:grid-cols-12     bg-green-500 ">

          <div className="flex flex-col md:col-span-6   md:bg-yellow-300 ">
            <div className="md:bg-yellow-600 ">
              <h1 className="leading-tight text-7xl font-bold mt-10 md:text-7xl xl:text-7xl pt-5 pb-10 md:pb-0">
                {hello} <br />
                <span className="text-accent ">{limon}</span>
                <br />
                <span className="text-accent ">{sheikh}</span>
              </h1>
              <div className="mt-10 flex flex-wrap items-center gap-2 py-2 md:bg-slate-300">
                <span className=" text-[16px]">{title}</span>
                <div className="flex items-center">
                  <span className="text-xl font-bold typewriter">{titleName}</span>
                </div>
              </div>
              <p className="py-5">{description}</p>
            </div>


            <div className="py-10 md:py-0 md:bg-yellow-900 md:mt-5">
              <div className="grid grid-flow-col justify-between md:justify-start md:gap-6 md:bg-violet-600 py-3 md:py-2">
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
              

              <div className="mt-5 md:pb-8 flex justify-between md:justify-start md:gap-16">
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


          <div className="hidden md:block md:col-span-6   bg-blue-400">d
            {/* <div className="h-[100%] w-[100%]">
              <img src={image} alt="hero image" className="w-[100%] h-[100%]" />
            </div> */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
