import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/flowcite_dashboard1.png';
import porfolioImage2 from '../images/portfolio/toddle.com.au.png';
import porfolioImage3 from '../images/portfolio/stylesearch.com.png';
import porfolioImage4 from '../images/portfolio/livefeather.com.png';
import porfolioImage5 from '../images/portfolio/tylko.com.png';
import porfolioImage6 from '../images/portfolio/barchart.com.png';
import porfolioImage7 from '../images/portfolio/cwmead.com.png';
import porfolioImage8 from '../images/portfolio/irealtyprofessionals.com.png';
import porfolioImage9 from '../images/portfolio/paimon.moe.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Elijah Thomas Resume',
  description: "This is portfolio for Elijah Thomas",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Elijah Thomas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Hellerup based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">DICEUS</strong> creating intuitive and user-friendly web applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      In my personal life, I enjoy spending time with friends and family, as well as almost any outdoor activity
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Elijah is a seasoned full stack developer with expertise in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and SQL. He has a proven track record of delivering high-quality projects on time and enjoys collaborating with clients and colleagues to achieve their goals.`,
  aboutItems: [
    {label: 'Location', text: 'Hellerup, DK', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Japan', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'National Chiao Tung University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'DICEUS, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'JavaScript(ES6) / TypeScript',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'PHP',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React / Next.js',
        level: 9,
      },
      {
        name: 'Vuejs / Quasar / Nuxt.js',
        level: 9,
      },
      {
        name: 'Laravel / Inertia',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js / Express / Nest.js',
        level: 8,
      },
      {
        name: 'Python / Flask / Django',
        level: 7,
      },
      {
        name: 'REST APIs / GraphQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'All-In-One Solution For Academic Research',
    description: 'Built with React, Nextjs, Nodejs',
    url: 'https://flowcite.com',
    image: porfolioImage1,
  },
  {
    title: 'Toddle',
    description: 'Built with Wordpress, PHP',
    url: 'https://www.toddleapp.com/',
    image: porfolioImage2,
  },
  {
    title: 'Style Search',
    description: 'Built with React',
    url: 'https://stylesearch.com/',
    image: porfolioImage3,
  },
  {
    title: 'LiveFeather',
    description: 'Built with React, Express, Stripe, Emotion, Bootstrap',
    url: 'https://livefeather.com',
    image: porfolioImage4,
  },
  {
    title: 'Now even more wardrobes to match your needs',
    description: 'Built with Vue.js, Nuxt.js, Tailwind CSS',
    url: 'https://tylko.com/',
    image: porfolioImage5,
  },
  {
    title: 'Institution-Grade Tools',
    description: 'Built with Laravel, PHP',
    url: 'https://www.barchart.com/',
    image: porfolioImage6,
  },
  {
    title: 'THE TOYOTA HALL OF FAME',
    description: 'Built with Laravel, PHP, Bootstrap',
    url: 'https://cwmead.com/halloffame',
    image: porfolioImage7,
  },
  {
    title: 'Your HomeTown Real Estate Professionals',
    description: 'Built with React',
    url: 'https://irealtyprofessionals.com/',
    image: porfolioImage8,
  },
  {
    title: 'Genshin Impact Companion App',
    description: 'Built with SvelteKit, Nodejs',
    url: 'https://paimon.moe/',
    image: porfolioImage9,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2015',
    location: 'National Chiao Tung University',
    title: 'Bachelor of Computer Science',
    content: <p>Useful skill that I learned was collaboration. Throughout my time at school, I had the opportunity to work with different people on group projects, presentations, and other activities. This helped me develop communication skills, empathy, and the ability to work effectively with others towards a common goal.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - Present',
    location: 'DICEUS Ukraine Software Development Company',
    title: 'Full Stack Engineer',
    content: (
      <p>
        I have experience reducing latency, increasing test coverage, collaborating with teams, employing agile methodology, building microservices, mentoring junior developers, reviewing code, and maintaining backend code using various technologies.
      </p>
    ),
  },
  {
    date: 'October 2018 - June 2021',
    location: 'Luminary Australia Software Development Company',
    title: 'Full Stack Developer',
    content: (
      <p>
        I worked in building PWAs with Vue, JavaScript, and Laravel, implementing SEO for React e-commerce sites, deploying web applications with Docker, Kubernetes, and AWS, and developing live video co-shopping and work studio platforms with various technologies.
      </p>
    ),
  },
  {
    date: 'March 2016 - September 2018',
    location: 'MYOB Australia Software Development Company',
    title: 'Web Developer',
    content: (
      <p>
        I have experience building RESTful APIs for healthcare data reporting, implementing plugin architecture for customer software, delivering responsive websites with faster load times, and improving UX/UI design to increase conversion rates.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Paul',
      text: 'Working with Elijah has been a game-changer for my business. Their expertise in front-end and back-end development helped bring my vision to life. He was able to seamlessly integrate complex features into my website, and their attention to detail and responsiveness to my feedback made the collaboration a breeze. I highly recommend Elijah for any project that requires top-notch development skills.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Kandor',
      text: "I couldn't be happier with the work that Elijah did on my web application. He was able to take my ideas and turn them into a fully functional and user-friendly platform. Their ability to work on both the front-end and back-end made the development process efficient and streamlined. Elijah is an extremely talented developer and I would definitely work with him again in the future",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Eliott',
      text: "I had the pleasure of working with Elijah on a complex web application and I can say with confidence that he is one of the best developers I have ever worked with. He has an incredible skill set and a deep understanding of both front-end and back-end development.He was also great at collaborating with other members of the team and bringing their own ideas to the table. I would highly recommend Elijah  to anyone looking for a top-notch developer.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please feel free to contact me',
  items: [
    {
      type: ContactType.Email,
      text: 'elijahthomas.dev@gmail.com',
      href: 'mailto:elijahthomas.dev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Hellerup, Denmark',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'meticulousfan',
      href: 'https://github.com/meticulousfan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/meticulousfan'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20505915/gungho'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/elithomas5515/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ElijahT59051745'},
];
