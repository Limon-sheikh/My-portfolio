
import { FaLaptopCode, FaPalette, FaBolt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa"; //testing perpuse
import { SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript, SiWordpress, SiPhp } from "react-icons/si";
import { TbLayout2Filled } from "react-icons/tb";

import { FaCode, FaPaintBrush, FaWordpress  } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";


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
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
    ],
    accent: "text-yellow-700 bg-yellow-200",
    shadow:"shadow-[0px_0px_14px_6px_rgba(234,_179,_8,_0.5)]",
    icon: FaLaptopCode,
  },
  
  {
    id: "wordpress",
    title: "WordPress Development",
    tagline: "Custom themes & plugins",
    description:
      "I create custom WordPress websites with responsive design, SEO-friendly structure, and fast performance. I also develop custom plugins as per client requirements.",
    tools: [
      { name: "WordPress", icon: SiWordpress },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
    ],
    link: "/wordpress-projects",
    accent: "text-pink-700 bg-pink-200",
    shadow:"shadow-[0px_0px_20px_4px_rgba(236,_72,_153,_0.5)]",
    icon: SiWordpress,
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
    shadow:"shadow-[0px_0px_20px_4px_rgba(147,_51,_234,_0.5)]",
    icon: TbLayout2Filled,
  },
  
 
  // {
  //   id: "ui/ux",
  //   title: "UI / UX Implementation",
  //   tagline: "User-centered, accessible and modern interfaces",
  //   description:
  //     "I implement UI designs with careful attention to usability, accessibility and micro-interactions to improve engagement and user satisfaction.",
  //   tools: [
  //     { name: "Figma → HTML", icon: FaPalette }, // using FaPalette for visual
  //     { name: "Tailwind", icon: SiTailwindcss },
  //     { name: "React", icon: SiReact },
  //   ],
  //   features: [
  //     "Accessible components (a11y)",
  //     "Micro-interactions & animations",
  //     "Design-to-code fidelity",
  //   ],
  //   deliverables: ["Component library", "Interactive prototypes", "Handoff docs"],
  //   cta: { label: "See Case Studies", href: "#case-studies" },
  //   accent: "bg-indigo-200 text-indigo-700",
  //   icon: FaPalette,
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










// export const cardData = [
//   {
//     id: 1,
//     title: "Web Development",
//     description: "I build responsive and interactive websites using modern technologies ensuring high performance and clean UI.",
//     // image: "/images/web.png",
//     icon: FaCode,
//     iconColor: "#E2852E",
//   },
//   {
//     id: 2,
//     title: "Wordpress Customization",
//     description: "Custom and business-focused WordPress websites with full control & easy management for clients.",
//     // image: "/images/branding.png",
//     icon: FaWordpress,
//     // iconColor: "#FF7A00",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design",
//     description: "Clean and user-centric digital product design ensuring smooth user experience with modern layout.",
//     // image: "/images/design.png",
//     icon: FaPaintBrush,
//     iconColor: "#A259FF",
//   },
//   {
//     id: 4,
//     title: "Branding",
//     description: "Brand identity and creative assets",
//     // image: "/images/branding.png",
//     icon: SiSimilarweb,
//     iconColor: "#00D1F7",
//   }
// ];
