// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    const token = localStorage.getItem('tokened');

    if (token === null) {
        window.location.replace("../login.html");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h2>Notes Maker</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="home.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="home.html#part-one-main-id">Question Papers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="home.html#part-two-main-id">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="home.html#feedback-id">Feedback</a>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <a className="btn btn-default dropdown-toggle" role="button" id="menu1" data-toggle="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../user-removebg-preview.png" width="50px" height="auto" className="img-fluid" />
                        </a>
                        <ul className="dropdown-menu text-align-left" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="index.html">My Profile</a></li>
                            <li><button className="dropdown-item" id="logof">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
