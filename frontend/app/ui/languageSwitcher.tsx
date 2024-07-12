"use client";
import { ChangeEvent } from "react";
import { setLanguage } from "../lib/actions";

export function LanguageSwitcher() {
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(event.target.value);
	};

	return (
		<select
			id="standard-select"
			onChange={handleChange}
			className="bg-blue-600 text-white w-100 h-10 rounded-ms focus:outline-none focus:ring-2 focus:bg-blue-600"
		>
			<option value="en">EN</option>
			<option value="es">ES</option>
		</select>
	);
}
