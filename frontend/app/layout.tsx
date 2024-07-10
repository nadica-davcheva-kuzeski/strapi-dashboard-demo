import { montserrat } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import Header from "@/app/ui/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased`}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<main>{children}</main>
					<footer className="bg-blue-600 text-white p-4 text-center">
						© 2024 West Health. All rights reserved
					</footer>
				</div>
			</body>
		</html>
	);
}
