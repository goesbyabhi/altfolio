import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
	title: "Abhishek Panda",
	description: "Abhishek Panda's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={GeistMono.className}>
			<div className="max-w-7xl m-auto">
			{children}
			</div>
			</body>
		</html>
	);
}
