import React from "react";
import MedicationList from "../components/medication/MedicationList";
import Container from "../components/common/Container";

const MedicationPage = () => (
    <Container title={"Medication List"}>
        <MedicationList />
    </Container>
);

export default MedicationPage;
