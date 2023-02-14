import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ShareContext=createContext();
const ShareProvider = ({children}) => {
    const { user } = useContext(AuthContext);

// ....................Site Data Load........................


    const{data: siteData=[], isLoading, refetch:load}=useQuery({
        queryKey: ['siteDatabase'],
        queryFn: async()=>{
            const res=await fetch('https://deplefy-server.vercel.app/addNewSite');
            const data= await res.json()
            return data;
        }

    })


// ....................Profile Data Load........................

    const { data: profileImage = [], isFetching, refetch } = useQuery({

		queryKey: ['profiledata', user?.email],
		queryFn: async () => {
			const res = await fetch(`https://deplefy-server.vercel.app/profile?email=${user?.email}`)
			const data = await res.json();
			return data;
		}
	})

    const {data:contactUser=[]}=useQuery({
        queryKey: ['contactData'],
        queryFn: async()=>{
            const res= await fetch('https://deplefy-server.vercel.app/users')
            const data=res.json()
            return data;
        }
    })

    const shareInfo={
        siteData,
        profileImage,
        contactUser,
        refetch,
        load
    }
    return (
     <ShareContext.Provider value={shareInfo}>
      {children}
     </ShareContext.Provider>
    );
};

export default ShareProvider;