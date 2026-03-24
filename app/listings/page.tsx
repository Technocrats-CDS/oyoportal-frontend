import Link from "next/link";
import { Card } from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";

const listings = [
	{ id: "1", title: "Bodija Groceries", location: "Ibadan, Oyo" },
	{ id: "2", title: "Aleshinloye Electronics", location: "Ibadan, Oyo" },
	{ id: "3", title: "Ogbomosho Furnishings", location: "Ogbomosho, Oyo" },
];

export default function BusinessListingsPage() {
	return (
		<main className="w-full min-h-screen">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="container mx-auto max-w-7xl">
					<div className="flex items-center justify-between gap-4 mb-6">
						<h1 className="text-2xl font-bold">Business Listings</h1>

						<div className="flex items-center gap-3">
							<div className="w-72">
								<Input
									placeholder="Search listings"
									aria-label="Search listings"
								/>
							</div>
							<Button>Search</Button>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{listings.map((l) => (
							<Card key={l.id} className="flex flex-col">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
										{l.title.charAt(0)}
									</div>
									<div>
										<h3 className="font-semibold">{l.title}</h3>
										<p className="text-sm text-muted-foreground">
											{l.location}
										</p>
									</div>
								</div>

								<div className="mt-4 flex gap-2">
									<Link
										href={`/listings/${l.id}`}
										className="btn btn--size-default"
									>
										View
									</Link>
									<Button variant="outline">Contact</Button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
