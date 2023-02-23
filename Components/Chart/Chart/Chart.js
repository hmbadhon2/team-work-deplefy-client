import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { AuthContext } from "../../../context/AuthContext";


const Chart = () => {
    const{user}=useContext(AuthContext);
    const{socialName, setSocialName}=useState([]);
    const {socialValue, setSocialValue}=useState([]);

    useEffect(()=>{
       const socialMediaName=[];
       const socialMediaValue=[];

       const getSocialRecord= async()=>{
        const dataReq= await fetch(`https://deplefy-server.vercel.app/payments?email=${user?.email}`)
        const dataRes= await dataReq.json();

        for(let i=0; i<dataRes.length; i++)
        {
            socialMediaName.push(dataRes[i].money)
        }
        console.log(socialMediaName)
       }
    },[])

  
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="overflow-hidden">
            <AreaChart width={700} height={400} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" /><CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <XAxis dataKey="name" />
                <Tooltip />

                <YAxis></YAxis>
            </AreaChart>
        </div>
    );
};

export default Chart;