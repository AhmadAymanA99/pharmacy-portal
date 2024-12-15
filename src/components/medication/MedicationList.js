import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../slices/dataSlice";
import SearchBar from "./SearchBar";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { Button } from "react-bootstrap";
import EditModal from "./EditModal";
import Table from "./Table";

const MedicationList = () => {
    const dispatch = useDispatch();
    const { items: medications, loading, error } = useSelector((state) => state.data);
    const [filteredMedications, setFilteredMedications] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentMedication, setCurrentMedication] = useState(null);

    useEffect(() => {
        if (!medications.length) {
            dispatch(fetchData());
        }
    }, [dispatch, medications.length]);

    useEffect(() => {
        setFilteredMedications(medications);
    }, [medications]);

    const handleSearch = (query) => {
        setFilteredMedications(medications.filter((med) => med.title.toLowerCase().includes(query.toLowerCase())));
    };

    const handleEdit = (medication) => {
        setCurrentMedication(medication);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        const updatedMedications = filteredMedications.filter((med) => med.id !== id);
        setFilteredMedications(updatedMedications);
    };

    const handleSave = () => {
        const updatedMedications = filteredMedications.map((med) => (med.id === currentMedication.id ? currentMedication : med));
        setFilteredMedications(updatedMedications);
        setShowModal(false);
    };

    const columns = [
        { header: "ID", accessor: "id" },
        { header: "Name", accessor: "title" },
        { header: "Description", accessor: "body" },
        {
            header: "Actions",
            custom: (med) => (
                <span className="d-flex">
                    <Button className="m-1" variant="primary" size="sm" onClick={() => handleEdit(med)}>
                        Edit
                    </Button>
                    <Button className="m-1" variant="danger" size="sm" onClick={() => handleDelete(med.id)}>
                        Delete
                    </Button>
                </span>
            ),
        },
    ];

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Table columns={columns} filteredMedications={filteredMedications} />
            <EditModal showModal={showModal} setShowModal={setShowModal} currentMedication={currentMedication} setCurrentMedication={setCurrentMedication} handleSave={handleSave} />
        </div>
    );
};

export default MedicationList;
