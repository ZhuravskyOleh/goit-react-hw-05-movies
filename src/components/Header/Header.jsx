import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar  mb-3 navbar-expand-lg" style={{backgroundColor: "grey"}}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/movie">Movies</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

