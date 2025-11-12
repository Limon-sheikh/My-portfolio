

import HeroData from '../data/hero';
import Button from '../components/Button';
import '../App.css'; //custome typewriter


const Home = () => {


    const {hello, limon, sheikh, title, titleName, description, socials, image} = HeroData[0];



    return (
        <section className="container bg-green-300 mx-auto grid md:grid-cols-12">
          {/* hero left side content start */}
            <div className="text-gray col-span-7 px-5">
              <h1 className="text-[clamp(3rem,11vw,5rem)] leading-tight md:text-6xl lg:text-7xl font-bold mt-14">
                {hello} <br/><span className="text-accent ">{limon}</span><br/><span className="text-accent ">{sheikh}</span>
              </h1>
              <div className="mt-14 flex flex-wrap">
                <span className="pr-1 text-[15px]">{title}</span>
                <div className="flex items-center">
                  <span className="text-md sm:text-xl font-bold typewriter">{titleName}</span>
                </div>
              </div>
              <p className="mt-3">{description}</p>

              {/* hero social icons */}
              <div className="grid grid-flow-col justify-between md:justify-start mt-20 md:mt-80 lg:mt-20
               md:gap-6">
                {socials.map((social, index) =>(
                  <a key={index} href={social.link} style={{borderColor: social.color, transition: "all 0.4s ease-in-out"}} target='_blank' 
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
                    <social.icon style={{color: social.color, transition: "all 0.4s ease-in-out"}} size={20}/>
                  </a>
                ))}
              </div>

              {/* hero button */}
              <div className="mt-10 mb-5 flex justify-between md:justify-start md:gap-16">
                <Button title='view more' border={false}
                  className="
                    bg-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-hover
                    transition-all duration-150 ease-linear 
                  "/>
                <Button title='Downlod Cv' border={true}
                  className="border-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-accent
                  transition-all duration-150 ease-linear border-2
                "/>
              </div>
            </div>
          {/* hero left side content end */}
            

          {/* hero right side content start */}
            <div className="hidden md:block border-2 col-span-5 bg-red-400">
              <div className='h-[100%] w-[100%] pr-5'>
                <img src={image} alt="hero image" className='w-[100%] h-[100%]'/>
              </div>
                {/* <div className='absolute bg-accent top-60 animate-bounce p-4 rounded-full'>html</div> */}
            </div>
          {/* hero right side content end */}
        </section>
    );
};

export default Home;