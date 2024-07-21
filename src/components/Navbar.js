import "./NavbarStyles.css"
import React from 'react'
import {Link} from 'react-router-dom'
import {Menuitems} from "./MenuItems"

export default class Navbar extends React.Component{
    state = {
        clicked : false
    };
    render(){
        return(
            <nav className="NavItems">
                <h1 className="navbar-logo">TrippY</h1>
                <div className="menu-icons" onClick={() => {
                    this.setState({
                        clicked : !this.state.clicked
                    })
                }}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        Menuitems.map((item,index) => {
                            return(
                                <li>
                                    <Link className={item.cName} to = {item.url}>
                                        <i className={item.icon} ></i>{item.title}
                                    </Link>
                                </li>
                            );
                        }
                        )}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
        
    }
}