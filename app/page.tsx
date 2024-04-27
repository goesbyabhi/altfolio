import { DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { Fragment } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
	return (
		<main>
			<section>
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
				<Avatar>
					<AvatarImage src={DATA.profilePicture} />
					<AvatarFallback>Abhishek Panda</AvatarFallback>
				</Avatar>
				<h2 className="text-xl font-bold">About</h2>
				<p className="text-sm">{DATA.summary}</p>
			</section>
			<section>
				<h2 className="text-xl font-bold">Work Experience</h2>
				{DATA.work.map((work) => (
					<Fragment key={work.company}>
						<h3>{work.company}</h3>
						<h4>{work.title}</h4>
						{work.techstack.map((badge) => (
							<Badge variant="outline" key={badge}>{badge}</Badge>
						))}
						<h5>{work.start} - {work.end}</h5>
						<p>{work.description}</p>
					</Fragment>
				))}
			</section>
			<section>
				<h2 className="text-xl font-bold">Education</h2>
				<h3>{DATA.education.institute}</h3>
				<h4>{DATA.education.degree}</h4>
				<h5>{DATA.education.course}</h5>
				<h5>{DATA.education.start} - {DATA.education.end}</h5>
				{DATA.education.courseSubjects.map((badge) => (
					<Badge variant="outline" key={badge}>{badge}</Badge>
				))}
			</section>
			<section>
				<h2 className="text-xl font-bold">Skills</h2>
				{DATA.skills.map((skill) => (
					<Badge variant="outline" key={skill}>{skill}</Badge>
				))}
			</section>
			<section>
				<h2 className="text-xl font-bold">Projects</h2>
				<div>
					{DATA.projects.map((project) => (
						<Card key={project.title}>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>
									{project.techStack.map((tech) => (
										<Badge variant="outline" key={tech}>{tech}</Badge>
									))}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>{project.description}</p>
							</CardContent>
							<CardFooter>
								<p>
									{"link" in project ? (
										Array.isArray(project.link) ? (
											project.link.map((l) => (
												<Button key={l.label} variant="outline" size="icon" asChild>
													<a href={l.href}>
														<l.icon className="size-4" />
													</a>
												</Button>
											))
										) : null) : "WIP ;)"}
								</p>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
