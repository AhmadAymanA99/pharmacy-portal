import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../slices/dataSlice";
import BarChart from "../components/dashboard/BarChart";
import DonutChart from "../components/dashboard/DonutChart";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Container from "../components/common/Container";
import ChartCard from "../components/dashboard/ChartCard";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { items: sampleData, loading, error } = useSelector((state) => state.data);

    const inventoryData = {
        "Medication A": 10,
        "Medication B": 15,
        "Medication C": 5,
    };

    useEffect(() => {
        if (!sampleData.length) {
            dispatch(fetchData());
        }
    }, [dispatch, sampleData.length]);

    const charts = [<BarChart data={sampleData} />, <DonutChart inventory={inventoryData} />];

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
        <Container title={"Pharmacist Dashboard"}>
            <div className="row mb-4">
                {charts.map((chart) => (
                    <ChartCard>{chart}</ChartCard>
                ))}
            </div>
        </Container>
    );
};

export default DashboardPage;
