import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom bg-body-tertiary">
            <div class="container p-2">
                <Link class="navbar-brand" to="/">
                    <img className="ms-auto" src="media/image/logoo.png" alt="error" style={{ width: "250px", height: "50px",objectFit: "contain",paddingLeft:"8%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/product">Product</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;