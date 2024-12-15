import React from "react";

function Container({ title, children }) {
    return (
        <div className="container">
            <h3 className="mb-4">{title}</h3>
            {children}
        </div>
    );
}

export default Container;
