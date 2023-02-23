import { AuthContext } from "../context/AuthContext";
import useAdmin from "../Components/Hooks/useAdmin";
import Loading from "../Components/Shared/Loading";
import { useContext } from "react";
import { ShareContext } from "../ShareProvider/ShareProvider";




import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
   
    useEffect(() => {
        if (email) {
            fetch(`https://deplefy-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
})
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;