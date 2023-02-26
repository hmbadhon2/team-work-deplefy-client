import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useContext } from "react";
import useAdmin from "../../Components/Hooks/useAdmin";
import { Protect } from "../../Components/PrivateRoute/PrivateRoute";
import { AuthContext } from "../../context/AuthContext";
import AdminRoute from "../../routes/AdminRoute";
import { ShareContext } from "../../ShareProvider/ShareProvider";
// import Header from "../Components/Header/Header";

// import Loading from "../Components/Shared/Loading";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const { userAdmin, setUserAdmin } = useState([]);


    // const {profiledata}=useContext(ShareContext);
    // console.log(profiledata)
    // const [isSeller] = useSeller(user?.email);
    //  useEffect(()=>{
    //     fetch(`http://localhost:9000/users/${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setUserAdmin(data))
    //  },[user?.email])

    const { data: adminAccess = {}, refetch: siteLoad } = useQuery({
        queryKey: ['siteDatabase', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://deplefy-server.vercel.app/users/${user?.email}`);
            const data = await res.json()
            return data;
        }

    })


    // const [isAdmin] = useAdmin(user?.email)
    // const [isBuyer] = useBuyer(user?.email)
    return (
        <div className='md:max-w-[1140px] md:mx-auto overflow-hidden'>

            <div className="drawer">
                {/* <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> */}
                <div className="">

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className=""></label>
                    <ul className="menu p-4 text-base-content dark:text-white">
                        {/* <li><Link href="/dashboard">Dashboard</Link></li> */}

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




                        <div>
                            {
                                adminAccess.role == 'admin' && <div>
                                    <li className="manu-item -mb-1 font-bold text-gray-500 dark:hover:text-lime-700"><Link href="/AllUsers">All users</Link></li>

                                </div>

                            }
                            <li className="manu-item -mb-1 font-bold text-gray-500 dark:hover:text-lime-700"><Link href="/PayInformation">Payment Information</Link></li>
                            <li className="manu-item -mb-1 font-bold text-gray-500 dark:hover:text-lime-700"><Link href="/Other">Other</Link></li>
                        </div>




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Protect(Dashboard);

