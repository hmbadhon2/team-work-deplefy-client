
import { useQuery } from "@tanstack/react-query";
import { motion, spring } from "framer-motion"
import { useEffect, useState } from "react";
import PricingData from "./PricingData";

const buttonVariants = {
    hover:{
        scale:1.1
    }
}

const Pricing = () => {



    const { data: pricings = [], refetch } = useQuery({

		queryKey: ['profileDatabase'],
		queryFn: async () => {
			const res = await fetch('https://deplefy-server.vercel.app/pricing')
			const data = await res.json();
			return data;
            console.log(pricings)
		}
	})

    return (
        <div>

           <section className="py-20">
                <div className=" mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                    
                        <h2 className="text-4xl font-bold lg:text-5xl ">Get the plan <br></br> that works for you</h2>
                    </div>

                    <div className="gap-y-16 gap-x-8 md:my-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                       
                    {
                pricings?.map(pricing=><PricingData key={pricing._id} pricing={pricing} refetch={refetch}></PricingData>)
            }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;