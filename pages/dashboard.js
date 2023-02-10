import Link from "next/link";
import { useContext } from "react";
import Header from "../Components/Header/Header";
import useAdmin from "../Components/Hooks/useAdmin";
import Loading from "../Components/Shared/Loading";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    // const [isBuyer] = useBuyer(user?.email)
    return (
        <div className='md:max-w-[1140px] md:mx-auto overflow-hidden'>

            <div className="drawer">
                {/* <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> */}
                <div className="drawer-content">

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 text-base-content dark:text-white">
                        <li><Link href="/dashboard">Dashboard</Link></li>

                        {/* {
                            isBuyer &&

                            <>
                                <li><Link to="/dashboard/bookings">My Bookings</Link></li>
                                <li><Link to="/dashboard/wishlist">My Wishlist</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/addAdvertisement">Advertise Your Product</Link></li>
                                <li><Link to="/dashboard/userAd">My Advertisement</Link></li>
                            </>

                        } */}
                        {
                            // isAdmin &&

                            <>
                                <li><Link href="/AllUsers">All users</Link></li>
                               
                            </>

                        }



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;

