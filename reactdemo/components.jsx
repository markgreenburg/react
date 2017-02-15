
class Header extends React.Component{
	render(){
		return <div>I am the HEADER</div>;
	}
}


class Layout extends React.Component{
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
				<ul id="results"></ul>
			</div>
		);
	}
}

ReactDOM.render(
	<Layout />,
	document.getElementById('container')
);
