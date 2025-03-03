export const METADATA = {
  title: "Portfolio | Danil Gorbunov",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://dangorbunov.com",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design dynamic user experience",
  "I design and develop things",
  "I develop UX/UI to frontend apps",
];

export const EMAIL = "danilgorbunov.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/danilgorbunov",
  behance: "https://www.behance.net/danil_gorbunov",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "AI chat bot",
    image: "/projects/chatbot.png",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "AI bot for Online Shops - SAAS (in process)",
    gradient: ["#685506", "#7B6921"],
    url: "https://www.behance.net/gallery/220342691/SAAS-AI-BOT-ASSISTANT",
    tech: ["figma", "react", "html", "css"],
  },
  {
    name: "Invoicing Back Office App",
    image: "/projects/global.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Redesigning back-office system for better management",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.behance.net/gallery/213389169/Global-Blue-Back-Office",
    tech: ["figma"],
  },
  {
    name: "Clothing Rental App",
    image: "/projects/frentify.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Browse, rent, and return clothes effortlessly",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.behance.net/gallery/210919755/Renting-Clothes-App",
    tech: ["figma", "wordpress", "css"],
  },
  {
    name: "Food delivery App",
    image: "/projects/foodcore.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "All-in-one app for drivers and customers",
    gradient: ["#245B57", "#004741"],
    url: "https://www.behance.net/gallery/210551109/B2B-Delivery-App",
    tech: ["figma"],
  },
  {
    name: "Flutter App for forklifts",
    image: "/projects/laps.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Digital 3D twin solutions for businesses 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://www.behance.net/gallery/166258627/Warehouse-accounting-app",
    tech: ["flutter", "html", "css", "git"],
  },
  {
    name: "Hotel booking app",
    image: "/projects/hoteller.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "App blending convenience with social interaction",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.behance.net/gallery/210264069/Hotel-Booking-App",
    tech: ["figma"],
  },
  {
    name: "Expedia Canada's Cruise Website",
    image: "/projects/expedia.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Video blog for exclusive cruise expert advice",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://cmytravelvideo.com",
    tech: ["wordpress", "html", "css", "figma"],
  },
  {
    name: "The Theater Website",
    image: "/projects/theatre.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Website of a drama theater with a 100-year history",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.theatre.org.ua",
    tech: ["figma", "wordpress", "html", "css"],
  },
  {
    name: "Intuitive invoicing app",
    image: "/projects/invoice.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Invoicing app order, management, communication",
    gradient: ["#172839", "#334659"],
    url: "https://www.behance.net/gallery/209463007/Invoicing-App",
    tech: ["figma"],
  },
  {
    name: "Mental Health App",
    image: "/projects/xmotive.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: " Mental Health Quotations App, designed using Figma",
    gradient: ["#142D46", "#2E4964"],
    url: "https://www.behance.net/gallery/166183679/Motivation-Quotes-App",
    tech: ["figma", "flutter", "html", "css"],
  },
  {
    name: "B2B ecommerce SAAS",
    image: "/projects/xproid.png",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "A fast process for managing products to the shop",
    gradient: ["#470700", "#712A23"],
    url: "https://www.behance.net/gallery/218361457/Xproid-SAAS-for-ecommerce",
    tech: ["figma", "react", "wordpress", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "figma",
    "javascript",
    "react",
    "next",
    "flutter",
    "wordpress",
    "gsap",
    "tailwind",
    "sass",
    "html",
    "css",
    "git",
  ],
  userInterface: ["figma", "sketch", "photoshop"],
  other: ["git", "webpack", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Experience in training an AI bot for ecommerce",
    size: ItemSize.SMALL,
    subtitle:
      "Actively developing an AI chatbot for order processing as a UX/UI/React/Python engineer, leveraging the Eclat Algorithm in Machine Learning",
    image: "/timeline/chatbot.svg",
    slideImage: "/timeline/chatbot.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Received a Master's degree in UX Design",
    size: ItemSize.SMALL,
    subtitle:
      "I have confirmed my qualification at Glasgow Caledonian University",
    image: "/timeline/uxdi.svg",
    slideImage: "/timeline/uxdi.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Got Google and HarvardX certification",
    size: ItemSize.SMALL,
    subtitle:
      "This is expanding my expertise in design, technology, and problem-solving",
    image: "",
    slideImage: "/timeline/google.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Joining the UX design community, SUXA",
    size: ItemSize.SMALL,
    subtitle: "",
    image: "/timeline/suxa.svg",
    slideImage: "/timeline/suxa.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Product (UX/UI) designer, B2 Stack",
    size: ItemSize.SMALL,
    subtitle:
      "Current. Creating intuitive designs, collaborating with teams to optimize user experience and product functionality",
    image: "",
    slideImage: "/timeline/invo.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Flutter Developer in SAAS project, Twinzo 3D",
    size: ItemSize.SMALL,
    subtitle: "Created app for warehouse like a part od 3D visualisation",
    image: "/timeline/twinzo.jpg",
    slideImage: "/timeline/f2.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Product Designer Xproid, SAAS",
    size: ItemSize.SMALL,
    subtitle: "First project like UX/UI and react developer",
    image: "",
    slideImage: "/timeline/x.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "QA Open Conference from Global Logic",
    size: ItemSize.SMALL,
    subtitle: "1st place in PM in team work, 2020 🚀",
    image: "",
    slideImage: "/timeline/global.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Golden Byte. Startup battle participant 2018",
    size: ItemSize.SMALL,
    subtitle: "Presented the project at the startup battle",
    image: "",
    slideImage: "/timeline/gold.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Got a black belt in Korean Hapkido. Couching. Present",
    size: ItemSize.SMALL,
    subtitle:
      "Honorary member of the European Hapkido and Hankido Associations",
    image: "",
    slideImage: "/timeline/mentoring.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from Backend Course",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 5 years laying the foundation of Frontend Engineering and UX/UI",
    image: "/timeline/beetroot.svg",
    slideImage: "/timeline/php.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Offline course Html, CSS, Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "After that, I could communicate with developers like a developer",
    image: "/timeline/beetroot.svg",
    slideImage: "/timeline/beetroot.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fell in love with Figma at first sight",
    size: ItemSize.SMALL,
    subtitle:
      "I always believed a company would emerge to lower the entry barrier into design",
    slideImage: "/timeline/figma.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started learning C# as a programming base",
    size: ItemSize.SMALL,
    subtitle: "2 years of offline classes, 15 hours per week",
    image: "/timeline/step.jpg",
    slideImage: "/timeline/stepslide.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Created first project like UX/UI and Wordpress developer",
    size: ItemSize.SMALL,
    subtitle:
      "This project allowed me to apply design principles, improve site usability, and gain hands-on experience in web development.",
    slideImage: "/timeline/1wp.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2013",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX/UI designer, Krasiva Marketplace",
    size: ItemSize.SMALL,
    subtitle:
      "Communicated with business owners to better understand clients. Designed user-friendly interfaces and explained solutions to teams.",
    slideImage: "/timeline/krasiva.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in UX Designing, Web Studio",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in Ecommerce, where I learnt the fundamentals of Frontend, UI/UX, motion design and more...",
    image: "/timeline/d.gif",
    slideImage: "/timeline/wp.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2010",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from University, Computer Science",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 5 years laying the foundation of Frontend Engineering and UX/UI",
    image: "/timeline/univer.svg",
    slideImage: "/timeline/univer.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
