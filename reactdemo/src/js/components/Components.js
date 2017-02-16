import React from "react";

class Header extends React.Component{
	render(){
		return <div>I am the HEADER</div>;
	}
}

class Footer extends React.Component {
	render() {
		return <div>I am the FOOTER</div>;
	}
}

class Coin extends React.Component {
	constructor() {
		super();
		this.sides = [ 
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg','http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
		];
		this.state = {
			image: this.sides[Math.round(Math.random())],
			flipped: false
		}
	}

	flip() {
		const side = Math.round(Math.random());
		this.setState({image: this.sides[side]});
	};

}

export default class Layout extends React.Component{
	constructor(){
		super()
		this.state = {
			number:3
		};
	}

	render(){
		return(
			<div>
				<Header />
				<div>I am JSX</div>
				<Coin />
				<Footer />
			</div>
		);
	}
}
