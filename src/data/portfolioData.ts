
import { 
  SiHtml5, SiJavascript, SiTypescript, SiReact, 
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiMysql, 
  SiPostgresql, SiPrisma
} from 'react-icons/si';
import { FaJava, FaRobot, FaMobileAlt, FaCss3Alt, FaDatabase } from 'react-icons/fa';

export const HERO_DATA = {
  name: "Sreehari K P",
  role: "Full Stack Developer",
  introduction: "I am a passionate Full Stack Developer who enjoys building scalable web and mobile applications. I love solving real-world problems using modern technologies and continuously learning new tools to improve my development skills.",
};

export const ABOUT_DATA = {
  text: [
    "I have a deep passion for software development, with a strong focus on backend architecture and modern web technologies.",
    "My experience spans across developing both web and mobile applications, ensuring seamless user experiences and robust functionality.",
    "I am a continuous learner, always exploring new tools and frameworks to stay ahead in the ever-evolving tech landscape.",
    "As a team player with a problem-solving mindset, I thrive in collaborative environments where innovative ideas are brought to life."
  ]
};

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    institution: "College of Engineering Trikaripur",
    score: "CGPA: 7.43",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    major: "",
    institution: "Government Higher Secondary School Kottila",
    score: "Percentage: 96%",
  },
  {
    id: 3,
    degree: "SSLC (10th)",
    major: "",
    institution: "Assisi English Medium School Neruvambram",
    score: "Percentage: 78%",
  }
];

export const SKILLS_DATA = {
  Frontend: [
    { name: "HTML", icon: SiHtml5, level: 90, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, level: 85, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, level: 85, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
    { name: "React.js", icon: SiReact, level: 85, color: "#61DAFB" },
    { name: "React Native", icon: SiReact, level: 75, color: "#61DAFB" },
    { name: "Expo", icon: FaMobileAlt, level: 75, color: "#000020" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#339933" },
    { name: "Express.js", icon: SiExpress, level: 80, color: "#000000" },
    { name: "NestJS", icon: SiNestjs, level: 75, color: "#E0234E" },
    { name: "Core Java", icon: FaJava, level: 70, color: "#007396" },
    { name: "Python", icon: SiPython, level: 75, color: "#3776AB" },
  ],
  Databases: [
    { name: "MySQL", icon: SiMysql, level: 80, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "#4169E1" },
    { name: "Oracle Database", icon: FaDatabase, level: 65, color: "#F80000" },
    { name: "ChromaDB", icon: FaRobot, level: 60, color: "#12B981" },
  ],
  ORM: [
    { name: "Prisma ORM", icon: SiPrisma, level: 80, color: "#2D3748" },
  ],
  "AI / LLM": [
    { name: "LangChain", icon: FaRobot, level: 65, color: "#1C3C3C" },
  ],
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Gnapi Technologies",
    companyUrl: "https://gnapitechnologies.com/index.html",
    role: "Full Stack Developer Intern",
    duration: "5 February 2026 – Present",
    responsibilities: [
      "Developed web and mobile applications.",
      "Built REST APIs using NestJS and Express.js.",
      "Worked with PostgreSQL and Prisma ORM.",
      "Developed React Native mobile applications using Expo.",
      "Implemented live streaming related features.",
      "Integrated Supabase into applications.",
      "Worked on AI-based sports solutions using YOLO object detection.",
      "Integrated LangChain and ChromaDB for AI-powered applications.",
      "Collaborated with team members using Git."
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Live Streaming Mobile App",
    description: "Developed a sports live-streaming platform with multi-camera support, React Native frontend, NestJS backend, PostgreSQL database, Prisma ORM, and Supabase integration.",
    technologies: ["React Native", "Expo", "NestJS", "PostgreSQL", "Prisma", "Supabase"],
    image: "https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Live+Streaming+App"
  },
  {
    id: 2,
    title: "Hybrid RAG Chatbot",
    description: "Built an AI chatbot using LangChain and ChromaDB with Retrieval-Augmented Generation (RAG) for intelligent document-based conversations.",
    technologies: ["LangChain", "ChromaDB", "Node.js", "TypeScript"],
    image: "https://via.placeholder.com/600x400/4c1d95/ffffff?text=RAG+Chatbot"
  },
  {
    id: 3,
    title: "Meeting Room Booking System",
    description: "Created a full-stack room booking application with authentication, room scheduling, and PostgreSQL database.",
    technologies: ["React", "NestJS", "Prisma", "PostgreSQL"],
    image: "https://via.placeholder.com/600x400/047857/ffffff?text=Room+Booking"
  },
  {
    id: 4,
    title: "Attendance Management System",
    description: "Developed an attendance and leave management system with automated attendance tracking and leave balance calculation.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "https://via.placeholder.com/600x400/b91c1c/ffffff?text=Attendance+System"
  }
];

export const CONTACT_DATA = {
  email: "skp959114@gmail.com",
  phone: "+91 9061302500",
  linkedin: "https://linkedin.com/in/sreeharikp",
  github: "https://github.com/Sreehari12-git"
};
