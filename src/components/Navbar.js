import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">News Hunts</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link className="nav-link" to="/general">Home </Link>
                            <Link className="nav-link" to="/business">Business</Link>
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            <Link className="nav-link" to="/health">Health</Link>
                            <Link className="nav-link" to="/science">Science</Link>
                            <Link className="nav-link" to="/sports">Sports</Link>
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </div>
                    </div>
                    <div className="custom-control custom-switch text-light">
                        <input type="checkbox" className="custom-control-input text-dark" id="customSwitch1" />
                        <label className="custom-control-label" htmlFor="customSwitch1" title='Not Working'></label>
                    </div>
                </nav>
            </div>
        )
    }
}
