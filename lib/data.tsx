import { GitHubIcon, LinkedInIcon, XIcon, LeetCodeIcon } from "./icons";
import { GlobeIcon } from "lucide-react";

export const DATA = {
	name: "Abhishek Panda",
	location: "Mumbai, India",
	position: "Software Developer",
	summary: "I am a Software Developer with a Bachelor of Engineering degree in Information Technology from Mumbai University. My expertise lies primarily in web development. Additionally, I have a keen interest in data analytics, and I am currently expanding my skills in GPU programming, reverse engineering and AI-related technologies.",
	profilePicture: "avatar.jpeg",
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
				url: "https://twitter.com/0x4bhi",
				icon: XIcon,
			},
			{
				name: "LeetCode",
				url: "https://leetcode.com/goesbyabhi/",
				icon: LeetCodeIcon,
			},
		],
	},
	education: {
		institute: "University of Mumbai",
		degree: "Bachelor's degree in Engineering",
		course: "Information & Technology",
		start: "Jun 2020",
		end: " May 2024",
		courseSubjects: ["Operating Systems", "Data Structures and Algorithms", "Computer Networks", "Database Management Systems", "Software Engineering", "Object Oriented Programming"]
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
			techStack: ["Side Project", "JavaScript", "React", "Vite", "React Bootstrap", "Markdown"],
			description: "A simple markdown based notes app with seamless editing, previewing and deleting notes.",
			link: [
				{
					label: "GitHub",
					icon: GitHubIcon,
					href: "https://github.com/goesbyabhi/Notes-app",
				},
				{
					label: "Deployment",
					icon: GlobeIcon,
					href: "https://notes-app-two-lake.vercel.app/",
				}
			],
		},
		{
			title: "Giffmpeg",
			techStack: ["Side Project", "TypeScript", "React", "Vite", "FFmpeg", "FFmpeg.wasm", "Tailwind CSS"],
			description:
				"Browser application for converting videos to GIFs. Built with React, FFmpeg.wasm and Tailwind CSS",
			link: [
				{
					label: "GitHub",
					icon: GitHubIcon,
					href: "https://github.com/goesbyabhi/giffmpeg",
				},
				{
					label: "Deployment",
					icon: GlobeIcon,
					href: "https://giffmpeg.vercel.app/",
				}
			]
		},
		{
			title: "Minijs",
			techStack: ["Side Project", "Javascript", "HTML"],
			description:
				"A minimal JavaScript Code Minifier. Built with JavaScript and HTML",
			link: [{
				label: "Minijs",
				icon: GitHubIcon,
				href: "https://github.com/goesbyabhi/minijs",
			},
			]
		},
		{
			title: "Birb",
			techStack: ["Side Project", "JavaScript", "Chrome Extension"],
			description:
				"A Chrome extension that replaces the X logo of twitter with the OG twitter logo. Built with JavaScript",
			link: [{
				label: "Birb",
				icon: GitHubIcon,
				href: "https://github.com/goesbyabhi/birb",
			},
			]
		},
		{
			title: "Jikan.py",
			techStack: ["Side Project", "Python", "Jikan API"],
			description:
				"A python wrapper for the Jikan API. Integrate MyAnimeList into your Python application using this simple and easy to use wrapper.",
			link: [{
				label: "Jikan.py",
				icon: GitHubIcon,
				href: "https://github.com/goesbyabhi/jikan.py",
			},
			]
		},
		{
			title: "HeckNFTs",
			techStack: ["Semester Group Project", "HTML", "Tailwind CSS", "JavaScript", "Web3.js", "Metamask", "IPFS"],
			description: "An NFT marketplace built with HTML, Tailwind CSS, JavaScript, Web3.js, Metamask and IPFS.",
			link: [{
				label: "HeckNFTs",
				icon: GitHubIcon,
				href: "https://github.com/goesbyabhi/HeckNFTs-main",
			},
			]
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
		},
	],
} as const;
