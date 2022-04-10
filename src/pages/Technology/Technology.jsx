import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import TechnologyItem from "../../components/TechnologyItem/TechnologyItem";
import AnimatePageComponent from "../../animatePageComponent/AnimatePageComponent";

const Destination = () => {
	const [technology, setTechnology] = useState(undefined);

	useEffect(() => {
		const getPlanets = async () => {
			const data = await fetch("/assets/data.json");
			const { technology: technologyArray } = await data.json();
			const technologyObject = technologyArray.reduce((result, item) => {
				result[item.name.toLowerCase().replace(" ", "")] = { ...item };
				return result;
			}, {});
			setTechnology(technologyObject);
		};

		getPlanets();
	}, []);

	return (
		<AnimatePageComponent>
			<Heading number="03" text="Space launch 101" />
			{technology && (
				<Routes>
					<Route
						path="launchvehicle"
						element={
							<TechnologyItem
								type="Launch"
								technology={technology.launchvehicle}
							/>
						}
					/>
					<Route
						path="spaceport"
						element={
							<TechnologyItem type="Port" technology={technology.spaceport} />
						}
					/>
					<Route
						path="spacecapsule"
						element={
							<TechnologyItem
								type="Capsule"
								technology={technology.spacecapsule}
							/>
						}
					/>
				</Routes>
			)}
		</AnimatePageComponent>
	);
};

export default Destination;
