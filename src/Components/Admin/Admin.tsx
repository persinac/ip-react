import React from "react";

interface InterfaceProps {}

export class Admin extends React.Component<InterfaceProps, {}> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<div>
				<h4>List of User name</h4>
				<p>(Saved on Sign Up in Firebase Database)</p>

				<p></p>
			</div>
		);
	}
}
