import React, {Component} from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class NavigationElement extends Component {
    render() {
        return <li><NavLink to={this.props.page}>{this.props.name}</NavLink></li>;
    }
}

class Navigation extends Component {
    render() {
        return (
            <div className="navigation-bar">
                <ul>
                    <NavigationElement key="homePage" name="Home" page="/"/>
                    {this.props.isLoggedIn ? <NavigationElement key="employeeListPage" name="Employees" page="/employees"/> : null}
                    <NavigationElement key="aboutPage" name="About" page="/about"/>
                    <NavigationElement key="versionPage" name={"Version " + this.props.version} page="/version" />
                    {this.props.isLoggedIn ? <NavigationElement key="userPage" name={this.props.userName ? this.props.userName : "User"} page="/user"/> : null}
                    {this.props.isLoggedIn ? <NavigationElement key="logoutPage" name="Sign out" page="/logout" />
                    : <NavigationElement key="loginPage" name="Sign in" page="/login" />}
                </ul>
            </div>
        );
    }
}

export default Navigation;
