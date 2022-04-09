import { useState, useEffect } from "react";
import styles from "./Destination.module.scss";
import { Route, Routes } from "react-router-dom";
import AnimatePageComponent from "../../animatePageComponent/AnimatePageComponent";
import DestinationPlanet from "../../components/DestinationPlanet/DestinationPlanet";

const Destination = () => {
	const [destinations, setDestinations] = useState(undefined);

	useEffect(() => {
		const getPlanets = async () => {
			const data = await fetch("/assets/data.json");
			const { destinations: destinationArray } = await data.json();
			const destinationObject = destinationArray.reduce((result, item) => {
				result[item.name.toLowerCase()] = { ...item };
				return result;
			}, {});
			setDestinations(destinationObject);
		};

		getPlanets();
	}, []);

	return (
		<AnimatePageComponent className={styles.Destination}>
			<h1>
				<span>01</span>Pick your destination
			</h1>
			{destinations && (
				<Routes>
					<Route
						path="moon"
						element={<DestinationPlanet planet={destinations.moon} />}
					/>
					<Route
						path="mars"
						element={<DestinationPlanet planet={destinations.mars} />}
					/>
					<Route
						path="europa"
						element={<DestinationPlanet planet={destinations.europa} />}
					/>
					<Route
						path="titan"
						element={<DestinationPlanet planet={destinations.titan} />}
					/>
				</Routes>
			)}
		</AnimatePageComponent>
	);
};

export default Destination;
