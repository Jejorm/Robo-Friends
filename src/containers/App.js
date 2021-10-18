import { Component } from "react";
import { robots } from "../robots"
import Scroll from "../components/Scroll"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"

import "./App.css"


class App extends Component {

	constructor() {

		super()

		this.state = {
			robots,
			searchField: "",
		}
	}

	onSearchChange = event => {

		this.setState({
			searchField: event.target.value
	})
}

	render() {

		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter(
			robot => robot.name.toLowerCase().includes(
				searchField.toLowerCase()
			)
		);

		return (
			<div className="tc">
				<h1 className="f1">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App
