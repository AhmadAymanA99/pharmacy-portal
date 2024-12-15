import React from "react";
import { Link } from "react-router-dom";

function SiteLink({ brand = false, to, title }) {
    return (
        <Link className={brand ? "navbar-brand" : "nav-link"} to={to}>
            {title}
        </Link>
    );
}

export default SiteLink;
