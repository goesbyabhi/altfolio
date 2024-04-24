import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

export const DATA = {
	name: "Abhishek Panda",
	location: "Mumbai, India",
	position: "Software Developer",
	summary: "I am a Software Developer with a Bachelor of Engineering degree in Information Technology from Mumbai University. My expertise lies primarily in web development. Additionally, I have a keen interest in data analytics, and I am currently expanding my skills in GPU programming, reverse engineering, and AI-related technologies.",
	profilePicture: "https://raw.githubusercontent.com/goesbyabhi/altfolio/main/assets/Avatar.jpeg?token=GHSAT0AAAAAACRGHM5GGQ4BPNLJEWYZEB6UZRJPQPA",
	contact: {
		email: "abhishekrpanda@gmail.com",
		socials: [
			{
				name: "GitHub",
				url: "https://github.com/goesbyabhi",
				icon: GitHubIcon,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/goesbyabhi/",
				icon: LinkedInIcon,
			},
			{
				name: "X/Twitter",
				url: "https://www.linkedin.com/in/goesbyabhi/",
				icon: XIcon,
			},
		],
	},
	education: {
		institute: "University of Mumbai",
		degree: "Bachelor's degree in Engineering",
		course: "Information & Technology",
		start: "2020",
		end: "2024",
		courseSubjects: "Operating Systems, Data Structures and Algorithms, Computer Networks, Database Management Systems, Software Engineering, Object Oriented Programming"
	},
	work: [
		{
			company: "Tata Institute of Fundamental Research",
			techstack: ["HTML", "CSS", "PHP", "JavaScript", "SQL", "Linux", "Docker"],
			title: "Project Intern",
			start: "Aug 2023",
			end: "Apr 2024",
			description: "Developed an internal web application for managing assets for the institute using PHP, CodeIgniter, MySQL, HTML, CSS, JavaScript, Tailwind CSS, Alpine.js. Developed role specific unique dashboards. Developed admin dashboard to manage other users.",
		},
	],
	skills: [
		"HTML",
		"CSS",
		"JavaScript",
		"C++",
		"PHP",
		"Python",
		"Rust",
		"TypeScript",
		"React",
		"Node.js",
		"Express.js",
		"Next.js",
		"Tailwind CSS",
		"DaisyUI",
		"Linux",
		"Git",
		"GitHub",
		"AWS",
		"Google Cloud Platform",
		"Docker",
		"Figma",
		"Adobe XD",
		"Chrome DevTools",
	],
	projects: [
	{
      title: "Notes App",
      techStack: [
        "Side Project",
        "JavaScript",
        "React",
        "Vite",
        "React Bootstrap",
        "Markdown",
      ],
      description: "A simple markdown based notes app with seamless editing, previewing and deleting notes.",
      logo: [],
      link: {
        label: "Notes App",
        href: "https://github.com/goesbyabhi/Notes-app",
      },
    },
    {
      title: "Giffmpeg",
      techStack: ["Side Project", "TypeScript", "React", "Vite", "FFmpeg", "FFmpeg.wasm", "Tailwind CSS"],
      description:
        "Browser application for converting videos to GIFs. Built with React, FFmpeg.wasm and Tailwind CSS",
      logo: [],
      link: {
        label: "Giffmpeg",
        href: "https://github.com/goesbyabhi/giffmpeg",
      },
    },
    {
      title: "Minijs",
      techStack: ["Side Project", "Javascript", "HTML"],
      description:
        "A minimal JavaScript Code Minifier. Built with JavaScript and HTML",
      logo: [],
      link: {
        label: "Minijs",
        href: "https://github.com/goesbyabhi/minijs",
      },
    },
    {
      title: "Birb",
      techStack: ["Side Project", "JavaScript", "Chrome Extension"],
      description:
        "A Chrome extension that replaces the X logo of twitter with the OG twitter logo. Built with JavaScript",
      logo: [],
      link: {
        label: "Birb",
        href: "https://github.com/goesbyabhi/birb",
      },
    },
    {
      title: "Jikan.py",
      techStack: ["Side Project", "Python", "Jikan API"],
      description:
        "A python wrapper for the Jikan API. Integrate MyAnimeList into your Python application using this simple and easy to use wrapper.",
      logo: [],
      link: {
        label: "Jikan.py",
        href: "https://github.com/goesbyabhi/jikan.py",
      },
    },
    {
      title: "HeckNFTs",
      techStack: ["Semester Group Project", "HTML", "Tailwind CSS", "JavaScript", "Web3.js", "Metamask", "IPFS"],
      description: "An NFT marketplace built with HTML, Tailwind CSS, JavaScript, Web3.js, Metamask and IPFS.",
      logo: [],
      link: {
        label: "HeckNFTs",
        href: "https://github.com/goesbyabhi/HeckNFTs-main",
      },
    },
    {
      title: "NeoRust",
      techStack: [
        "Rust",
        "CLI",
      ],
      description:
        "A work in progress Rust implementation of the NeoFetch CLI tool.",
      logo: [],
      // link: {
      //   label: "NeoRust",
      //   href: "",
      // },
    },
    {
      title: "YuiOS",
      techStack: [
        "Rust",
        "Operating System",
        "CLI",
        "Bootloader",
      ],
      description:
        "A work in progress Operating System built with Rust.",
      logo: [],
      // link: {
      //   label: "YuiOS",
      //   href: "",
      // },
    },
  ],
} as const;
