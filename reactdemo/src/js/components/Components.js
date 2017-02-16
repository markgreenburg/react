'use strict';

import React from "react";

class Header extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">CoinFlip</a>
                </div>
            </nav>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<footer class="footer">
                <div class="container">
                    <p class="text-muted">
                        Mark Greenburg | &copy;2016
                    </p>
                </div>
            </footer>
		);
	}
}

class Coin extends React.Component {
	constructor() {
		super();
		this.sides = [ 
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-tail.jpg','http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
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
		this.setState({image: this.sides[side]}, this.props.increment());
	}

	render() {
		return (
			<div class="container">
				<div class="coin-image col-xs-10 col-xs-offset-1">
					<img src={this.state.image} height="506" width="500" />
				</div>
				<div class="coin-button col-xs-2 col-xs-offset-4">
					<button class="btn btn-primary" onClick={this.flip}>
						Flip
					</button>
					<p>(Total: {this.props.flips})</p>
				</div>
			</div>
		);
	}
}

export default class Layout extends React.Component {
	constructor() {
		super()
		this.state = {
			flips: 0
		};
		this.increment = this.increment.bind(this);
	}

	increment() {
		const flipCount = this.state.flips;
		this.setState({flips: flipCount + 1});
	}

	render() {
		return(
			<div>
				<Header />
				<div>Flip a coin!</div>
				<Coin increment={this.increment} flips={this.state.flips}/>
				<Footer />
			</div>
		);
	}
}
