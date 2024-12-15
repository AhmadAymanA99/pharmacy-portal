import React from "react";
import SiteLink from "./SiteLink";

function Navbar() {
    const items = [
        { title: "Dashboard", to: "/dashboard" },
        { title: "Medications", to: "/medications" },
    ];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
                <SiteLink brand={true} title={"Pharmacy Portal"} to={"/"} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {items.map(({ title, to }) => (
                            <li key={title} className="nav-item">
                                <SiteLink title={title} to={to} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
