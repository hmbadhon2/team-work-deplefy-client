import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Pie, PieChart } from "recharts";
import { AuthContext } from "../../../context/AuthContext";


const Chart = () => {
  const { user } = useContext(AuthContext);


  const { data = [] } = useQuery({
    queryKey: ['payData', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://deplefy-server.vercel.app/payments?email=${user?.email}`)
      const data = await res.json()
      return data;
    }
  })


  console.log(data)



  return (
    <div className="overflow-hidden my-12">

      <PieChart width={730} height={250}>

        <Pie data={data} dataKey="money" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>

    </div>
  );
};

export default Chart;