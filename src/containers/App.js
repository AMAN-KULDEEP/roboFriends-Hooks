import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


function App(){
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		searchField: ''
	// 	}
	// }

	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');

	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({robots:users}));
	// }

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users));
	},[])
	const onSearchChange = (event) => {
		setSearchField(event.target.value)
		
	}
	
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
	return !robots.length? <h1 className= 'tc' >loading</h1> :
		(
			<div className = 'tc'>
			    <h1 className = 'f1'>RoboFriends</h1>
			    <SearchBox searchChange = {onSearchChange}/>
			    <Scroll>
			    	<ErrorBoundary>
						<CardList robots = {filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	

}
export default App;