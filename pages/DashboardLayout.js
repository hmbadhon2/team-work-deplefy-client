import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useContext } from "react";
import useAdmin from "../Components/Hooks/useAdmin";
import { Protect } from "../Components/PrivateRoute/PrivateRoute";
import { AuthContext } from "../context/AuthContext";
import AdminRoute from "../routes/AdminRoute";
import { ShareContext } from "../ShareProvider/ShareProvider";
// import Header from "../Components/Header/Header";

// import Loading from "../Components/Shared/Loading";


const Dashboard = ({children}) => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const[layout, setLayout]=useState(false)
  
    const { userAdmin, setUserAdmin } = useState([]);




    const { data: adminAccess = {}, refetch: siteLoad } = useQuery({
        queryKey: ['siteDatabase', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://deplefy-server.vercel.app/users/${user?.email}`);
            const data = await res.json()
            return data;
        }

    })



    return (
        <div className='md:max-w-[1280px] md:mx-auto my-10 overflow-hidden'>
<div>
    
    <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
           
            <main>{children}</main>
        </div>
        <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu w-52  my-10">

            
                <div>
              
                    {
                        adminAccess.role == 'admin' && <div>
                            <li className="manu-item -mb-1 font-bold text-gray-500 dark:hover:text-lime-700"><Link href="/AllUsers">All users</Link></li>

                        </div>

                    }
                    <li className="manu-item -mb-1 font-bold text-gray-500 dark:hover:text-lime-700"><Link href="/PayInformation">Payment Information</Link></li>
                </div>

            </ul>

        </div>
    </div>
</div>
        </div>
    );
};

export default Protect(Dashboard);



