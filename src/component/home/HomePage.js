import React from "react";
import Dashboard from "./Dashboard";
import MasterLayout from "../MasterLayout";

function HomePage() {
    return <MasterLayout body={<Dashboard/>}/>;
}

export default HomePage;
