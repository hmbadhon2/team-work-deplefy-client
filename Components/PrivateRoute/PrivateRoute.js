import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


export function Protect(Component) {
    return function Protect(props) {
        const [screenLoading, setScreenLoading] = useState(true);
        const { user, loading } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            if (!loading) {
                if (!user?.uid) {
                    router.replace("/login");
                } else {
                    setScreenLoading(false);
                }
            }
        }, [loading, user, router]);

        if (screenLoading) {
            return (
                <div className="w-screen h-screen flex justify-center items-center">
                    <p>....Loading</p>
                </div>
            );
        } else {
            return <Component {...props} />;
        }
    };
}

