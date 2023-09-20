import { Link, Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
           
           <nav  className='flex justify-between px-5 h-[50px] shadow-md items-center'>
           <div>
                Amajon
            </div>
            <ul className='flex gap-8'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
           </nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;