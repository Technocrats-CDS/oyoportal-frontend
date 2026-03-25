import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import "material-icons/iconfont/material-icons.css";
import Providers from "./providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHeroClient from "@/components/layout/HomeHeroClient";

const publicSans = Public_Sans({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-public-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "OyoPortal",
		template: "%s - OyoPortal",
	},
	description: "OyoPortal",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${publicSans.variable} antialiased m-0 flex flex-col min-h-screen`}
			>
				<Providers>
					<Header />
					<HomeHeroClient />
					<main className="flex-1 w-full">{children}</main>
					<Footer />
					<ReactQueryDevtools
						initialIsOpen={false}
						buttonPosition="top-right"
						position="right"
					/>
				</Providers>
			</body>
		</html>
	);
}
