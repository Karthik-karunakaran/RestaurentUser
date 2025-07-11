import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({cart}) => {
    return (
        <div>
            <header className='d-none d-lg-block d-md-block'>
                <nav className="navbar navbar-expand-lg  navbar-light  bg-dark">
                    <div className="container">
                        <Link className="navbar-brand fs-1 " to="#"><img src="/image/kk logo.jpg" alt="" /></Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fs-5" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto gap-5">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Menu">MENU</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </Link>
                                    <ul className="dropdown-menu fs-5" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/Service">Service</Link></li>
                                        <li><Link className="dropdown-item" to="/Signup">Signup</Link></li>
                                        <li><Link className="dropdown-item" to="#">Track Order</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Login"><i class="fa-solid fa-user"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Cart"><span className=' cart-count'>{cart.length}</span><i class="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* small display */}
            <header className=' d-sm-block d-lg-none d-md-none'>
                <nav className="navbar navbar-expand-lg  navbar-light  bg-dark">
                    <div className="container">
                        <Link className="navbar-brand fs-1 " to="#"><img src="/image/kk logo.jpg" alt="" /></Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fs-5" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto gap-2">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Menu">MENU</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </Link>
                                    <ul className="dropdown-menu fs-5" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/Service">Service</Link></li>
                                        <li><Link className="dropdown-item" to="/Signup">Signup</Link></li>
                                        <li><Link className="dropdown-item" to="#">Track Order</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Login"><i class="fa-solid fa-user"></i>LOGIN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
