import { Card } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";

const projects = [
	{ id: "p1", title: "Community Garden", owner: "CDS Group A" },
	{ id: "p2", title: "Youth Skills Hub", owner: "SAED Team" },
	{ id: "p3", title: "Solar Lighting", owner: "PPA Initiative" },
];

export default function ProjectsPage() {
	return (
		<main className="w-full min-h-screen">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="container mx-auto max-w-7xl">
					<div className="flex items-center justify-between mb-6">
						<h1 className="text-2xl font-bold">Projects</h1>
						<Button>Submit Project</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{projects.map((p) => (
							<Card key={p.id} className="flex flex-col">
								<h3 className="font-semibold">{p.title}</h3>
								<p className="text-sm text-muted-foreground mt-2">
									Owned by {p.owner}
								</p>
								<div className="mt-4 flex gap-2">
									<Button variant="outline">Details</Button>
									<Button>Join</Button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
