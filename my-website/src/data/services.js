
import { FaLaptopCode, FaPalette, FaBolt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa"; //testing perpuse
import { SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript, SiWordpress, SiPhp } from "react-icons/si";
import { TbLayout2Filled } from "react-icons/tb";


export const serviceTitle = {
  offer: "WHAT WE OFFER",
  title: "Affordable Services",
  description:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies..",
};


export const cardData = [
  {
    id: "frontend",
    title: "Front-End Development",
    tagline: "Modern, responsive websites",
    description:
      "I build clean, accessible and fast front-end apps using modern tools and best practices. I convert designs to pixel-perfect UI and deliver production-ready code.",
    tools: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "React.js", icon: SiReact },
    ],
    accent: "text-yellow-700 bg-yellow-200",
    shadow: "shadow-md hover:shadow-xl",
    icon: FaLaptopCode,
  },
  
 {
    id: "ui/ux",
    title: "UI / UX Implementation",
    tagline: "User-centered, accessible and modern interfaces",
    description:
      "I implement UI designs with careful attention to usability, accessibility and micro-interactions to improve engagement and user satisfaction.",
    tools: [
      { name: "Figma → HTML", icon: FaPalette }, // using FaPalette for visual
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
    ],
    features: [
      "Accessible components (a11y)",
      "Micro-interactions & animations",
      "Design-to-code fidelity",
    ],
    deliverables: ["Component library", "Interactive prototypes", "Handoff docs"],
    cta: { label: "See Case Studies", href: "#case-studies" },
    accent: "bg-indigo-200 text-indigo-700",
    shadow: "shadow-md hover:shadow-xl",
    icon: FaPalette,
  },
  
  {
    id: "wordpress",
    title: "Theme Customization",
    tagline: "Tailored to your brand",
    description:
      "I customize WordPress themes to match your brand identity. From layout changes to advanced CSS tweaks, I ensure your site looks unique and professional.",
    tools: [
      { name: "WordPress", icon: SiWordpress },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    link: "/theme-customization",
    accent: "text-violet-700 bg-violet-200",
    shadow: "shadow-md hover:shadow-xl",
    icon: TbLayout2Filled,
  },
  


  //  {
  //   id: "wordpress",
  //   title: "WordPress Development",
  //   tagline: "Custom themes & plugins",
  //   description:
  //     "I create custom WordPress websites with responsive design, SEO-friendly structure, and fast performance. I also develop custom plugins as per client requirements.",
  //   tools: [
  //     { name: "WordPress", icon: SiWordpress },
  //     { name: "HTML5", icon: SiHtml5 },
  //     { name: "CSS3", icon: SiCss3 },
  //     { name: "JavaScript", icon: SiJavascript },
  //     { name: "PHP", icon: SiPhp },
  //   ],
  //   link: "/wordpress-projects",
  //   accent: "text-pink-700 bg-pink-200",
  //   shadow:"shadow-[0px_0px_20px_4px_rgba(236,_72,_153,_0.5)]",
  //   icon: SiWordpress,
  // },
];




// features: [
    //   "Responsive & Mobile-first",
    //   "Pixel-perfect Figma/PSD to HTML",
    //   "SEO-friendly markup",
    //   "Cross-browser compatibility",
    //   "Clean, commented & maintainable code",
    // ],
    // deliverables: [
    //   "Source code (GitHub / Zip)",
    //   "Live demo / deployment link",
    //   "Setup & usage instructions",
    // ],
    // cta: {
    //   label: "View Projects",
    //   href: "#projects",
    // }, 

