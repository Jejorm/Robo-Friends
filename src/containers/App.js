import Scroll from "../components/Scroll"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import { useState, useEffect} from "react";

import "./App.css"

function App() {

	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://jsonplaceholder.typicode.com/users");
			const users = await response.json();

			setRobots(users);

		}

		fetchData();
	}, [])

	const onSearchChange = event => {

		setSearchField(event.target.value)
	}

	const filteredRobots = robots.filter(
		robot => robot.name.toLowerCase().includes(
			searchField.toLowerCase()
		)
	);

	return !robots.length ?
		<h1>Loading</h1> :
		(
		<div className="tc">
			<h1 className="f1">Robofriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
}

export default App
