import React, { Component } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink
} from 'mdbreact';

class Navigation extends Component {
	state = {
		isOpen: false,
		activeItem: 0
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	toggleTab = tab => () => {
		if (this.state.activeItem !== tab) {
			this.setState({ activeItem: tab });
		}
	};

	render() {
		let items = [];
		if (this.props.routes) {
			this.props.routes.forEach((route, index) => {
				console.log(route.route);
				items.push(
					<MDBNavItem key={index}>
						<MDBNavLink to={route.route} exact>
							{route.name}
						</MDBNavLink>
					</MDBNavItem>
				);
			});
		}

		return this.props.routes && this.props.brand ? (
			<MDBNavbar color='white' light expand='md'>
				<MDBNavbarBrand>{this.props.brand}</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse
					id='navbarCollapse3'
					isOpen={this.state.isOpen}
					navbar
				>
					<MDBNavbarNav left>{items}</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		) : null;
	}
}

export default Navigation;
