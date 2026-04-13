import Link from "next/link";

import { Button } from "@/components/ui/shadcn/button";
import { Card } from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";

export const metadata = {
	title: "Register",
	description: "Create an account for the OyoPortal experience",
};

export default function RegisterPage() {
	return (
		<main className="flex min-h-screen w-full items-center justify-center px-4 py-16">
			<Card className="w-full max-w-lg space-y-6 rounded-3xl border-slate-100 bg-white p-6 shadow-sm">
				<div className="space-y-2">
					<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
						Create account
					</span>
					<h1 className="text-2xl font-extrabold tracking-tight text-heading">
						Register for your OyoPortal profile
					</h1>
					<p className="text-sm leading-relaxed text-slate-600">
						This is a lightweight frontend registration screen for the portal
						experience. Hook it up to the auth backend when the API is ready.
					</p>
				</div>

				<form className="space-y-4">
					<Input type="text" placeholder="Full name" aria-label="Full name" />
					<Input
						type="email"
						placeholder="Email address"
						aria-label="Email address"
					/>
					<Input
						type="tel"
						placeholder="Phone number"
						aria-label="Phone number"
					/>
					<Input type="password" placeholder="Password" aria-label="Password" />
					<Input
						type="password"
						placeholder="Confirm password"
						aria-label="Confirm password"
					/>
					<Button type="submit" className="w-full rounded-xl font-semibold">
						Create account
					</Button>
				</form>

				<p className="text-sm text-slate-600">
					Already have an account?{" "}
					<Link
						href="/auth"
						className="font-semibold text-brand hover:underline"
					>
						Sign in
					</Link>
				</p>
			</Card>
		</main>
	);
}
