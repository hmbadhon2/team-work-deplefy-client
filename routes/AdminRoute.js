import { useContext } from "react";
import useAdmin from "../Components/Hooks/useAdmin";
import Loading from "../Components/Shared/Loading";
import { AuthContext } from "../context/AuthContext";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    
};

export default AdminRoute;