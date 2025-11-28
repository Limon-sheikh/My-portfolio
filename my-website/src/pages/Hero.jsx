import HeroData from "../data/hero";
import Button from "../components/Navber/Button";
import "../App.css"; //custome typewriter

const Home = () => {
  const {hello, limon, sheikh, title, titleName, description, socials, image,} = HeroData[0];
  
  
  // h-[calc(100vh-90px)], text-[clamp(3rem,11vw,5rem)]


  return (
    <section id="hero" className="h-[calc(100vh-80px)] flex justify-center items-center bg-orange-500 border">
      <div className="container mx-auto h-full bg-pink-400">
        <div id="wraper" className="grid md:grid-cols-12 h-full px-5 md:px-0">
          {/* hero left side content start */}
          <div className="text-gray col-span-7 bg-yellow-500 flex flex-col justify-around md:justify-start">
            <div className="bg-yellow-600 ">
              <h1 className="leading-tight text-7xl md:text-6xl lg:text-7xl font-bold md:mt-14">
                {hello} <br />
                <span className="text-accent ">{limon}</span>
                <br />
                <span className="text-accent ">{sheikh}</span>
              </h1>
              <div className="mt-14 flex flex-wrap text-xl">
                <span className="pr-1 text-[16px]">{title}</span>
                <div className="flex items-center">
                  <span className="text-xl font-bold typewriter">
                    {titleName}
                  </span>
                </div>
              </div>
              <p className="mt-3">{description}</p>
            </div>

            {/* hero social icons */}
            <div className="bg-yellow-700">
              <div className="grid grid-flow-col justify-between md:justify-start md:gap-6 ">
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

              {/* hero button */}
              <div className="mt-10 mb-5 flex justify-between md:justify-start md:gap-16">
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

          {/* hero right side content start */}
          <div className="hidden md:block col-span-5 ">
            <div className="h-[100%] w-[100%]">
              <img src={image} alt="hero image" className="w-[100%] h-[100%]" />
            </div>
            {/* <div className='absolute bg-accent top-60 animate-bounce p-4 rounded-full'>html</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
