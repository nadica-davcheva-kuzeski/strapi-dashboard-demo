import Image from "next/image";

export default function Header() {
	return (
		<header className="sticky top-0 bg-blue-600 py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<Image
					src="/west-health-logo-white.svg"
					alt="Logo"
					width={200}
					height={100}
					className="object-contain"
				/>
				<nav>
					<ul className="flex space-x-4 text-white p-4">
						<li className="hover:text-gray-300 cursor-pointer">About Us</li>
						<li className="hover:text-gray-300 cursor-pointer">Initiatives</li>
						<li className="hover:text-gray-300 cursor-pointer">Our Entities</li>
						<li className="hover:text-gray-300 cursor-pointer">
							Resources & News
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
