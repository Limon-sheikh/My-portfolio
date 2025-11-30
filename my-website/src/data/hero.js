
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa6';
import heroImage from '../assets/image/sass-removebg-preview.png';


const heroData = [
  {
    id: 1,
    hello: "Hello, ",
    limon: "I'm Limon",
    sheikh: "sheikh",
    title: "A Passionate",
    titleName: "Front-end Developer ",
    description: "I design and build user-friendly websites using React.js, Tailwind CSS and modern technologies.",
    buttonText: "View My Work",
    image:heroImage,

    // Social icons
    socials: [
      {
        name: "Github",
        icon: FaGithub,
        link: "https://github.com/Limon-sheikh",
        color: '#24292e',
      },
      {
        name: "Linkedin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/limonsheikh/",
        color: '#0072B1',
      },
      {
        name: "twitter",
        icon: FaTwitter ,
        link: "#",
        color: '#1DA1F2',
      },
      {
        name: "instagram",
        icon: FaInstagram,
        link: "#",
        color: '#d62976',
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/limonsheikh23",
        color: '#1877F2',
      },
      {
        name: "youtube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@webroots",
        color: '#FF0000',
      }
      
      
    ],
  }
];

export default heroData;
