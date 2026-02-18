const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 8, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [];

const expLogos = [];

const testimonials = [];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/osman._.rizu/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/osman.rizu/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "#", // Placeholder as no X link provided
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/osman-rizu-933a18355/",
  },
];

const projects = [
  {
    id: "docs-clone",
    title: "Docs-Clone",
    description: "Concurrency without lagging implementation.",
    modelPath: "/models/computer-optimized-transformed.glb",
    scale: 0.5,
    rotation: [0, -Math.PI / 2, 0],
    position: [0, -1, 0],
    alt: "Docs-Clone Project",
    link: "https://github.com/KamiBreaker/Docs-Clone",
    name: "Interactive Developer",
  },
  {
    id: "doc-tracer",
    title: "Doc-Tracer",
    description: "Leveraging a modern tech stack to provide semantic version control and natural language querying.",
    shape: "torus",
    color: "#F05032", // Git Orange
    scale: 0.15,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    alt: "Doc-Tracer Project",
    link: "https://github.com/KamiBreaker/Doc-Tracer",
    name: "Version Control",
  },
  {
    id: "habit-tracker",
    title: "Habit-Tracker",
    description: "Gamified habit tracker featuring user consistency analysis and dynamic feedback loops.",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.5,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    alt: "Habit-Tracker Project",
    link: "https://github.com/KamiBreaker/Habit-Tracker",
    name: "React Developer",
  },
  {
    id: "dbms-parking-lot",
    title: "DBMS-Parking-Lot",
    description: "Curriculum Project, Implementing mysql and connectivity with flask(python).",
    shape: "cylinder",
    color: "#00758F", // MySQL Blue
    scale: 0.2,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    alt: "DBMS-Parking-Lot Project",
    link: "https://github.com/KamiBreaker/DBMS-Parking-Lot",
    name: "Python Developer",
  },
  {
    id: "mr-bird-view",
    title: "MR-Bird-View-main",
    description: "Strategy planner for Marvel Rivals built with Next.js to locate coordinates.",
    modelPath: "/models/three.js-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    alt: "MR-Bird-View Project",
    link: "https://github.com/KamiBreaker/MR-Bird-View-main",
    name: "3D Developer",
  },
  {
    id: "api-auth",
    title: "API-Auth",
    description: "Scalable RESTful API built with Node.js, Express, and PostgreSQL.",
    shape: "icosahedron",
    color: "#68A063", // Node Green
    scale: 0.2, // Iconahedron needs larger scale relative to group
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    alt: "API-Auth Project",
    link: "https://github.com/KamiBreaker/API-Auth",
    name: "Backend Developer",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
