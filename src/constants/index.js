import project1 from "../assets/projects/maya.webp";
import project2 from "../assets/projects/cyber.png";
import project3 from "../assets/projects/elearning.png";
import project4 from "../assets/projects/blog.png";
import project5 from "../assets/projects/vendezmoi.png";
import project6 from "../assets/projects/atlas.png";
import micropost from "../assets/projects/micropost.png";
import equifast from "../assets/projects/Equifast white .png";
import blackmark_logo from "../assets/projects/Blackmark Logo fn.png";
import apple_logo from "../assets/projects/Apple Logo Demo.png";
import happiness from "../assets/projects/HAPPINESS KWAMBOKA NYABUTO.png";
import blackmark_rate_card from "../assets/projects/Blackmark Rate Card 2.png";
import food_poster from "../assets/projects/Modern Food Poster.png";

import banana from "../assets/projects/Banana Typography.png";
import event_poster from "../assets/projects/Event poster 001.png";
import instagram_catchy from "../assets/projects/Instagram Catchy Post.png";
import victim from "../assets/projects/THE VICTIM.png";

export const HERO_CONTENT = `Hi! and welcome to my Portfolio where I have listed some of my skills, projects and achievements. Get to know me more 😊`;

export const ABOUT_TEXT = `I am a passionate full stack developer with a passion for creating efficient and user-friendly web applications. 
I have worked with a variety of technologies, including React, Node.js, Express.js, PHP laravel and MongoDB. I am also a graphic designer currently working as a freelancer. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding and graphic design, 
I enjoy exploring new places and adventuring`;

export const EXPERIENCES = [
  {
    year: "May 2022 - Present",
    role: "Full stack Developer",
    company: "Blackmark Solutions",
    description: `Took part in the development of several Web applications, focusing on creating responsive, user-friendly designs and fully functional websites. Collaborated with clients to meet project requirements, ensured optimal website performance and maintained a strong emphasis on delivering high-quality web solutions`,
    technologies: [""],
  },
  {
    year: "May 2023 - August 2023",
    role: "Intern IT Support",
    company: "Huduma Centre Bomet",
    description: `Completed a 3-month attachment in IT Support, where I gained hands-on experience in Providing technical support to end-users addressing hardware and software issues`,
    technologies: [""],
  },
  {
    year: "2023 - Present",
    role: "Graphic Designer",
    company: "Freelance",
    description: `Provide professional and visually compelling graphic design solutions tailored to client needs. Specialize in creating eye-catching designs for branding, marketing materials, and digital content, ensuring high-quality outcomes that effectively communicate the intended message and resonate with target audiences.`,
    technologies: [""],
  },
];
export const EDUCATION = [
  {
    year: "2020 - 2024",
    role: "Bachelor of Science in Information Technology",
    institution: "Kabarak University",
    description: `My degree provided a strong foundation in core computer science concepts, including programming, algorithms and systems design principles. It also offered hands-on exposure to cutting-edge technologies and real-world problem-solving, preparing me to excel in the ever-evolving tech industry.`,
    technologies: [""],
  },
  {
    year: "Jan 2023 - April 2023",
    role: "Graphic Design",
    institution: "Udemy Academy",
    description: `Completed a 3-month intensive training on graphic design, where I gained valuable skills and experience in creating visually appealing proffesional designs.`,
    technologies: [""],
  },
];

export const PROJECTS = [
  {
    title: "Atlas Liquor Store",
    image: project6,
    description:
      "Atlas Liquor Store is a dedicated online E-commerce website for a liquor store. It showcases various alcoholic products, which also streamline sales and potentially attract new customers",
    technologies: ["React", "Django", "Tailwind CSS"],
    website: "https://atlas-liquor-store.netlify.app/",
    github: "https://github.com/dev-oriel/CPIMS-Virtual-Assistant-Maya.git",
    category: "Development",
  },
  {
    title: "Micropost: A Distributed Microblogging Service",
    image: micropost,
    description:
      "Micropost is a fully distributed microblogging platform designed with a focus on key distributed system principles such as data replication, fault tolerance, scalability, and concurrency",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RAbbitMQ",
      "Tailwind CSS",
    ],
    website: "",
    github: "https://github.com/dev-oriel/CPIMS-Virtual-Assistant-Maya.git",
    category: "Development",
  },
  {
    title: "CPIMS Virtual Assistant-Maya",
    image: project1,
    description:
      "Maya is a virtual assistant chatbot built to provide assistance to users of the Child Protection Information Management Service (CPIMS). It is designed to provide users with quick and accurate responses to common queries and questions related to child protection.",
    technologies: ["Flask", "Python", "TensorFlow", "Tailwind CSS", "Pandas"],
    website: "",
    github: "https://github.com/dev-oriel/CPIMS-Virtual-Assistant-Maya.git",
    category: "Development",
  },
  {
    title: "Online Cyber Application",
    image: project2,
    description:
      "This is an online platform aimed at providing a user interactive and friendly way of doing cyber services at the comfort of your home.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "mySQL"],
    website: "https://infinity-online-cyber.netlify.app/",
    github: "https://github.com/dev-oriel/Infinity-Online-Cyber.git",
    category: "Development",
  },
  {
    title: "Elearning Platform",
    image: project3,
    description:
      "This platform is designed to provide learners with access to online learning resources and tools that will help them achieve their academic and professional goals.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "mySQL"],
    website: "",
    github: "https://github.com/dev-oriel/E-learning-Platform.git",
    category: "Development",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "mySQL", "Bootstrap"],
    website: "https://orielx-blogs.netlify.app/",
    github: "https://github.com/dev-oriel/Blogging-Platform.git",
    category: "Development",
  },
  {
    title: "Vendez Moi Ecommerce Platform",
    image: project5,
    description:
      "A custom Ecommerce platform for viewing catalogue online, purchasing, selling and conducting secure transactions online using a 3D secure payment system",
    technologies: ["HTML", "CSS", "JavaScript"],
    website: "https://vendezmoi-ecommerce-website.netlify.app/",
    github: "https://github.com/dev-oriel/Vendez-Moi-Ecommerce-Website.git",
    category: "Development",
  },
  {
    title: "Equifast Logo",
    image: equifast,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Blackmark Rate Card",
    image: blackmark_rate_card,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Food Poster",
    image: food_poster,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Campaign Poster",
    image: happiness,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Blackmark Logo",
    image: blackmark_logo,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Apple Logo",
    image: apple_logo,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Event poster",
    image: event_poster,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Banana",
    image: banana,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },

  {
    title: "IG catchy post",
    image: instagram_catchy,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
  {
    title: "Movie Poster",
    image: victim,
    description: "",
    technologies: [],
    category: "Graphic Design",
  },
];

export const CONTACT = {
  address: "Nairobi, Kenya",
  phoneNo: "+254 758 997 669 ",
  email: "kiplangatoriel@gmail.com",
};

export const REVIEWS = [
  {
    name: "Marion Chelangat",
    title: "Co-Founder, Blackmark Solutions ",
    review:
      "Working with Oriel has been a fantastic experience! The quality of work and dedication to our project exceeded expectations. Highly recommended.",
  },
  {
    name: "Judith Makau",
    title: "Centre Manager - Bomet Huduma centre",
    review:
      "Oriel's creativity and technical skills brought our vision to life. The designs and functionality were exactly what we needed.",
  },
  {
    name: "Michael Ngeno",
    title: "Software Engineer",
    review:
      "I have worked several projects with Oriel. His collaborative skills, the level of detail and the quality of codes are top class.",
  },
];
