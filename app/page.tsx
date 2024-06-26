import { DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { Fragment } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
	return (
		<main className="px-6 md:px-10 py-6 flex flex-col gap-y-3 print:px-0 print:py-0">
			<section className="flex flex-row items-start justify-between">
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">{DATA.name}</h1>
					<h3 className="text-sm">{DATA.position}</h3>
					<h6 className="text-xs">{DATA.location}</h6>
					<div>{DATA.contact.email ? (
						<Button variant="outline" size="icon">
							<a href={`mailto:${DATA.contact.email}`} target="_blank">
								<Mail className="h-4 w-4" />
							</a>
						</Button>
					) : null}
						{DATA.contact.socials.map((social) => (
							<Button key={social.name} variant="outline" size="icon" asChild>
								<a href={social.url} target="_blank">
									<social.icon className="size-4" />
								</a>
							</Button>
						))}
					</div>
				</div>
				<div className="mt-2 ml-6 flex-none self-start">
					<Avatar>
						<AvatarImage src={DATA.profilePicture} alt="My Face" />
						<AvatarFallback>Abhishek Panda</AvatarFallback>
					</Avatar>
				</div>
			</section>
			<section>
				<h2 className="text-xl font-bold">About</h2>
				<p className="text-sm">{DATA.summary}</p>
			</section>
			<section>
				<h2 className="text-xl font-bold">Work Experience</h2>
				{DATA.work.map((work) => (
					<Fragment key={work.company}>
						<div className="flex flex-wrap justify-between">
							<h3 className="font-bold">{work.company}</h3>
							<h5 className="font-bold">{work.start} - {work.end}</h5>
						</div>
						<h4 className="font-thin italic font-mono">{work.title}</h4>
						<div className="flex flex-wrap">
							<div className="flex gap-x-1 sm:gap-x-0">
								<h5 className="text-sm font-bold sm:block hidden">TechStack:</h5>
								<div className="flex flex-wrap">
									{work.techstack.map((badge) => (
										<Badge variant="outline" className="mx-[1.5px]" key={badge}>
											{badge}
										</Badge>
									))}
								</div>
							</div>
						</div>
						<p className="text-sm">{work.description}</p>
					</Fragment>
				))}
			</section>
			<section>
				<h2 className="text-xl font-bold">Education</h2>
				<div className="flex flex-col sm:flex-row justify-between">
					<h3 className="font-bold">{DATA.education.institute}</h3>
					<h5 className="font-bold">{DATA.education.start} - {DATA.education.end}</h5>
				</div>
				<h4 className="font-light">{DATA.education.degree}</h4>
				<h5 className="italic font-mono">{DATA.education.course}</h5>
				<div className="flex gap-x-1 flex-wrap">
					<p className="text-sm font-bold sm:block hidden ">Course Subjects: </p>
					<div className="flex flex-wrap">
						{DATA.education.courseSubjects.map((badge) => (
							<Badge variant="outline" className="m-[1.5px]" key={badge}>{badge}</Badge>
						))}
					</div>
				</div>
			</section>
			<section>
				<h2 className="text-xl font-bold pb-1">Skills</h2>
				<div ></div>
				{DATA.skills.map((skill) => (
					<Badge variant="outline" className="m-[1.5px]" key={skill}>{skill}</Badge>
				))}
			</section>
			<section>
				<h2 className="text-xl font-bold pb-2">Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{DATA.projects.map((project) => (
						<Card key={project.title} className="relative flex flex-col border border-gray-300">
							<div className="flex-grow">
								<CardHeader>
									<CardTitle className="text-lg">{project.title}</CardTitle>
									<CardDescription>
										{project.techStack.map((tech) => (
											<Badge variant="outline" className="m-[1.5px]" key={tech}>{tech}</Badge>
										))}
									</CardDescription>
								</CardHeader>
								<CardContent className="text-sm font-mono">
									<p>{project.description}</p>
								</CardContent>
							</div>
							<CardFooter className="flex-none">
								<p>
									{"link" in project ? (
										Array.isArray(project.link) ? (
											project.link.map((l) => (
												<Button key={l.label} variant="outline" size="icon" asChild>
													<a href={l.href} target="_blank">
														<l.icon className="size-4" />
													</a>
												</Button>
											))
										) : null) : "WIP :)"}
								</p>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
