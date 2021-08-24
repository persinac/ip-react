import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ACCOUNT, HOME} from "../../Constants/routes";


class NavigationComponent extends React.Component {
	constructor(props: any) {
		super(props);
	}

	public componentDidMount() { }

	public render() {
		return (
			<Navbar variant={"dark"} bg={"dark"} expand={"lg"} fixed={"top"}>
				<Navbar.Brand as={Link} to={HOME}>Dashboard</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							eventKey="1"
							as={Link}
							to={HOME}
							onClick={
								(event: any) => {
									this.removeActiveClasses();
									(event.target as any).classList.toggle('active')
								}
							}>
							Home
						</Nav.Link>
						<Nav.Link
							eventKey="2"
							as={Link}
							to={ACCOUNT}
							onClick={
								(event: any) => {
									this.removeActiveClasses();
									(event.target as any).classList.toggle('active')
								}
							}>
							Account
						</Nav.Link>
						{/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
						{/*	<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
						{/*	<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
						{/*	<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
						{/*	<NavDropdown.Divider />*/}
						{/*	<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
						{/*</NavDropdown>*/}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

	private removeActiveClasses(): void {
		[...document.querySelectorAll('.active')].forEach(function(e) {
			e.classList.remove('active');
		});
	}
}

export const Navigation = NavigationComponent;
