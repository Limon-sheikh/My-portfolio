import { FaArrowRight, FaLinkedin } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

export const footerData = [
  {
    id: 1,
    type: "about",
    description:"A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.",
  },
  {
    id: 2,
    type: "link",
    title: "Company",
    icon: FaArrowRight,
    link: [
      {id: 1, name: "Security & Provciy", url: "/", icon: FaArrowRight},
      {id: 2, name: "Support", url: "/", icon: FaArrowRight},
      {id: 3, name: "Term & Condition", url: "/", icon: FaArrowRight},
      {id: 3, name: "Contact", url: "/", icon: FaArrowRight},
      {id: 3, name: "About Us", url: "/", icon: FaArrowRight},
    ]
  },
  {
    id: 3,
    type: "linkedin",
    title: "Linkdin",
    name: "@Harold.com",
    description:"The full monty spiffing good time .",
    link:[
      {id: 1, name: "Linkdin", url: "/", icon: FaLinkedin},
    ],
  },
  {
    id: 4,
    type: "signup",
    title: "signup",
    placeholder: "subscribe",
    buttonText: "go",
    description:"Follow our newsletter to stay updated about agency.",
    link:[
      {id: 1, name: "Security & Provciy", url: "/", icon: GoSearch},
    ],
  },
];
