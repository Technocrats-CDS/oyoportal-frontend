import Link from "next/link";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { Card } from "@/components/ui/shadcn/card";

export default function AuthPage() {
	return (
		<main className="w-full min-h-screen flex items-center justify-center py-20">
			<Card className="max-w-md w-full">
				<h2 className="text-xl font-bold mb-4">Sign in to your portal</h2>

				<form className="flex flex-col gap-4">
					<Input
						type="email"
						placeholder="Email address"
						aria-label="Email address"
					/>
					<Input type="password" placeholder="Password" aria-label="Password" />
					<Button type="submit">Sign In</Button>
				</form>

				<div className="mt-4 text-sm text-muted-foreground">
					Don’t have an account?{" "}
					<Link href="/auth/register" className="text-primary font-semibold">
						Register
					</Link>
				</div>
			</Card>
		</main>
	);
}
