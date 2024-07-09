import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import Header from "@/app/ui/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<main className="container mx-auto flex-grow p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
						{children}
					</main>
					<footer className="bg-blue-600 text-white p-4 text-center">
						© 2024 West Health. All rights reserved
					</footer>
				</div>
			</body>
		</html>
	);
}
