import { Outlet } from "react-router-dom";
import Alldata from "../component/dashBoard/Alldata";

const Dashboard = () => {
    return (
        <div className='min-h-full'>
            <h1>Dahboard</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;