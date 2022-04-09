import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import CrewMember from "../../components/CrewMember/CrewMember";
import AnimatePageComponent from "../../animatePageComponent/AnimatePageComponent";

const Crew = () => {
	const [crew, setCrew] = useState(undefined);

	useEffect(() => {
		const getPlanets = async () => {
			const data = await fetch("/assets/data.json");
			const { crew: crewArray } = await data.json();
			const crewObject = crewArray.reduce((result, item) => {
				result[item.name.toLowerCase().replace(" ", "")] = { ...item };
				return result;
			}, {});
			setCrew(crewObject);
		};

		getPlanets();
	}, []);

	return (
		<AnimatePageComponent>
			<Heading number="02" text="Meet your crew" />
			{crew && (
				<Routes>
					<Route
						path="douglashurley"
						element={<CrewMember crewMember={crew.douglashurley} />}
					/>
					<Route
						path="markshuttleworth"
						element={<CrewMember crewMember={crew.markshuttleworth} />}
					/>
					<Route
						path="victorglover"
						element={<CrewMember crewMember={crew.victorglover} />}
					/>
					<Route
						path="anoushehansari"
						element={<CrewMember crewMember={crew.anoushehansari} />}
					/>
				</Routes>
			)}
		</AnimatePageComponent>
	);
};

export default Crew;
