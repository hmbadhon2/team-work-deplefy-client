import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import { ShareContext } from "../../../ShareProvider/ShareProvider";


const Domain = () => {
    const { user } = useContext(AuthContext);
    const{refetch}=useContext(ShareContext)

    const handleDomain = (event)=>{
       
        event.preventDefault();
        const form=event.target;
        const domain = form.domain.value;
        console.log(domain)

        const domainData={
            myDomain:domain,
            email: user?.email
        }

        fetch(`https://deplefy-server.vercel.app/userDomainName?email=${user?.email}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(domainData)
        })
        .then((res) => res.json() )
        .then((data) => {
            console.log(data)
            toast.success("Domain name succesful");
            refetch();
            form.reset()
        } )
        .catch((err) => console.log(err) )
    }


    return (
        <div className="rounded-3xl mt-12  bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 py-10">
            <div className="p-12 text-center">
                <h3 className="text-3xl text-white font-semibold dark:text-black mb-10"> Do You Want Your Premium Domain?</h3>
                <form onSubmit={handleDomain} className="p-5 rounded-3xl md:p-2  md:mx-24 bg-white md:rounded-full mb-10">
                    <div className="md:flex justify-between">
                        <input 
                         type="text" 
                         name="domain" 
                         id=""
                         placeholder="Set your domain name"
                         className="w-full rounded-full p-2 md:w-64 bg-slate-100 text-black my-4 md:my-0" 
                         />
                         
                        {/* <input 
                         type="text" 
                         name="" 
                         id=""
                         placeholder="Type your domain address"
                         className="w-full rounded-full p-2 md:w-64 bg-slate-100" 
                         /> */}

                         <button className="rounded-full my-4 md:my-0 py-3 px-8 md:px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-tr dark:from-lime-800 dark:to-lime-500 font-semibold text-lg">
                                Submit Domain
                         </button>

                    </div>

                </form>
                <div className="px-24 flex flex-row text-center justify-around text-white"> 
                        <h3><span className="text-black text-3xl mr-2">.net</span> $14.99</h3>
                        <h3><span className="text-cyan-400 text-3xl mr-2">.com</span> $14.99</h3>
                        <h3><span className="text-orange-600 dark:text-black text-3xl mr-2">.store</span> $14.99</h3>
                        <h3><span className="text-sky-500 dark:text-red-800 text-3xl mr-2">.info</span> $14.99</h3>
                        <h3><span className="text-black text-3xl mr-2">.co</span> $14.99</h3>
                </div>
            </div>
        </div>
    );
};

export default Domain;