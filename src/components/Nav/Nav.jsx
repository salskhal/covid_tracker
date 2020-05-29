import React from "react"
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return(
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 shadow">
            <   Link to="/" className="navbar-brand">COVIDTRACKER</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
                <NavLink to="/prevent" className="nav-link">PREVENTIVE MEASURES</NavLink>
            </li>   
            <li className="nav-item">
                <NavLink to="/what" className="nav-link">WHAT IS COVID-19 </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="#" className="nav-link">ABOUT</NavLink>
            </li>
            </ul>
            </div>
            </nav>
        </div>
    )
}

export default Nav