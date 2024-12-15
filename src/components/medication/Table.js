import React from "react";

function Table({ columns, filteredMedications }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {columns?.map((column) => (
                        <th>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredMedications.map((med) => (
                    <tr key={med.id}>
                        {columns?.map((column) => (
                            <td>{column?.custom ? column.custom(med) : med[column.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
