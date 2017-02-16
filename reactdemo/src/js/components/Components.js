'use strict';

import React from "react";

class Header extends React.Component {
	render() {
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
			image: this.sides[1],
			flipped: false
		}
		this.flip = this.flip.bind(this);
	}

	flip() {
		const side = Math.round(Math.random());
		console.log("coin flipped");
		this.setState({image: this.sides[side]});
	}

	render() {
		return (
			<div class="container">
				<div class="coin-image">
					<img src={this.state.image} height="150" width="150" />
				</div>
				<div class="coin-button">
					<button class="btn btn-primary" onClick={this.flip}>
						Flip
					</button>
				</div>
			</div>
		);
	}
}

export default class Layout extends React.Component {
	constructor() {
		super()
		this.state = {
			number:3
		};
	}

	render() {
		return(
			<div>
				<Header />
				<div>Flip a coin!</div>
				<Coin />
				<Footer />
			</div>
		);
	}
}
