"use client";

import { usePathname } from "next/navigation";
import HeroSection from "@/components/home/HeroSection";

export default function HomeHeroClient() {
	const pathname = usePathname();
	if (pathname !== "/") return null;
	return <HeroSection />;
}
