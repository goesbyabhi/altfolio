import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

import { DATA } from "@/lib/data";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
	return (
		<main>
			<section>
				<h1 className="text-2xl font-bold">{DATA.name}</h1>
				<h3 className="text-sm">{DATA.position}</h3>
				<h6 className="text-xs">{DATA.location}</h6>
				<div>{DATA.contact.email ? (
					<Button variant="outline" size="icon">
						<a href={`mailto:${DATA.contact.email}`}>
							<Mail className="h-4 w-4" />
						</a>
					</Button>
				) : null}
					{DATA.contact.socials.map((social) => (
						<Button key={social.name} variant="outline" size="icon" asChild>
							<a href={social.url}>
								<social.icon className="size-4" />
							</a>
						</Button>
					))}
				</div>
				<Avatar>
					<AvatarImage src={DATA.profilePicture}/>
					<AvatarFallback>Abhishek Panda</AvatarFallback>
				</Avatar>
				<h2 className="text-xl font-bold">About</h2>
				<p className="text-sm">{DATA.summary}</p>
			</section>
			<section></section>
		</main>
	);
}
