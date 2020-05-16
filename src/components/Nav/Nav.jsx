import React from "react"

const Nav = () => {
    return(
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 shadow">
            <a className="navbar-brand" href="index.html" target="_blank">COVIDTRACKER</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <a className="nav-link" href="/">HOME</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/prevent">PREVENTIVE MEASURES</a>
            </li>   
            <li className="nav-item">
            <a className="nav-link" href="#">WHAT IS COVID-19 </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">ABOUT</a>
            </li>
            </ul>
            </div>
            </nav>
        </div>
    )
}

export default Nav