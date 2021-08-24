import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import HomeComponent from '../Home';
import { Account } from '../Account';
import { IAppState } from '../../State';
import '../../Styles/general.css';

import * as ROUTES from '../../Constants/routes';

interface IProps {
	history?: any;
}

class AppComponent extends React.Component<any, IAppState> {
	constructor(props: any) {
		super(props);
		this.state = { authUser: null };
	}

	public componentDidMount() {}

	render () {
		return (
			<Router>
				<Navigation />
				<Route
					exact
					path="/"
					render={() => {
						return (<Redirect to={ROUTES.HOME} />)
					}}
				/>
				<Route path={ROUTES.HOME} component={HomeComponent}
							 render={() => {
								 return (<Redirect to={ROUTES.HOME} />)
							 }}
				/>
				<Route path={ROUTES.ACCOUNT} component={Account}/>
			</Router>
		);
	}
}

export const App = AppComponent;
