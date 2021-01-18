import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';




class App extends Component{

		constructor(){
			super()
			this.state = {
				robots: robots,
				searchfield:''


			}

// componentDidMount(){
	// fetch('Name of site')
	// .then(response=> response.json())
	// .then(users=> this.setState({robots.users}));
// } also the robots above should be changed to []


		}


		onSearchChange=(event)=>{
			this.setState({searchfield: event.target.value})
			

		}
		render(){

			const filteredRobots = this.state.robots.filter(
				robots=>{
					return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
				}

				)
			



			return(

				<div className='tc'>
				<h1 className='f1'>My Project</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
				</div>






			)




		}
		


}
export default App;