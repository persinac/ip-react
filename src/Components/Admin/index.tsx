import React from 'react';

const rp = require('request-promise');

interface IState {
	navbarHeight: string;
	users: any;
	data: any;
}

class AdminComponent extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);

		this.state = {
			users: null,
			navbarHeight: '',
			data: null
		};
	}

	public componentDidMount() {
		this.setState({navbarHeight: window.getComputedStyle(document.getElementById('primary-navbar'), null).getPropertyValue("height")})
	}

	public render() {
		const {navbarHeight} = this.state;
		const containerStyle = {
			height: `calc(100% - ${navbarHeight})`
		};
		return (
			<div className={'container-fluid'} style={containerStyle}>
				<div className={'row height-100'}>
					<main role={'main'} className={'col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'}>
						<h2>Admin</h2>
						<p>The admin page is only accessible by admins.</p>
						<p>{navbarHeight}</p>

						<div>
							{this.renderList()}
						</div>
					</main>
				</div>
			</div>
		);
	}

	private renderList() {
		return (<div><p>There was a list here</p></div>)
	}
}

export const AdminPage = AdminComponent;
