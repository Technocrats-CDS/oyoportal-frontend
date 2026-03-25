import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
			<div className="w-16 h-16 rounded-2xl bg-(--brand-50) flex items-center justify-center mb-6">
				<span className="material-icons text-brand text-3xl">explore_off</span>
			</div>
			<h1 className="text-2xl font-bold text-heading mb-2">Page Not Found</h1>
			<p className="text-sm text-slate-500 max-w-md mb-8">
				The page you&apos;re looking for doesn&apos;t exist or has been moved.
			</p>
			<Link
				href="/"
				className="btn btn--brand btn--size-default rounded-xl font-semibold text-sm px-6"
			>
				Back to Home
			</Link>
		</div>
	);
}
