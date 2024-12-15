import React from "react";

function ChartCard({ children }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card shadow p-3">{children}</div>
        </div>
    );
}

export default ChartCard;
