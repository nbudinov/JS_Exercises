import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Music Player</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="">
                       <Link to='/'>Home</Link>
                    </li>
                    <li className="">
                       <Link to='/songs/add'>Add song</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar