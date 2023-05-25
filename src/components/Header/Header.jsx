import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar bg-dark mb-3 navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link text-white" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link text-white" to="/movie">Movies</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

