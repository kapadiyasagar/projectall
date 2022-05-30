import React from 'react';
import Medicine from '../../component/Medicine/Medicine';

function Madicine(props) {


    const doctordata = [
        {
            id: "101",
            name: "Abacavir",
            quantity: "25",
            price: "150",
            expiry: "2022"
        },
        {
            id: "102",
            name: "Eltrombopag",
            quantity: "90",
            price: "550",
            expiry: "2021"
        },
        {
            id: "103",
            name: "Meloxicam",
            quantity: "85",
            price: "450",
            expiry: "2025"
        },
        {
            id: "104",
            name: "Allopuinol",
            quantity: "50",
            price: "600",
            expiry: "2023"
        },
        {
            id: "105",
            name: "Phenytoin",
            quantity: "63",
            price: "250",
            expiry: "2021"
        },
        {
            id: "106",
            name: "Avomine",
            quantity: "15",
            price: "150",
            expiry: "2023"
        },
    ]
    return (
        <div className="container">
            <div className="row my-3">
                <Medicine data={doctordata} />
            </div>
        </div>
    )
}
export default Madicine;