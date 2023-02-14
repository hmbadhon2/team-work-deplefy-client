import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ShareContext=createContext([]);
const ShareProvider = ({children}) => {
    const [siteData, setSiteData] = useState([]);
    const { user } = useContext(AuthContext);

// ....................Site Data Load........................
    useEffect(() => {
        fetch('https://deplefy-server.vercel.app/addNewSite')
            .then((res) => res.json())
            .then((data) => setSiteData(data))
    }, [])



// ....................Profile Data Load........................

    const { data: profileImage = [], isFetching, refetch } = useQuery({

		queryKey: ['profiledata', user?.email],
		queryFn: async () => {
			const res = await fetch(`https://deplefy-server.vercel.app/profile?email=${user?.email}`)
			const data = await res.json();
			return data;
		}
	})

    const shareInfo={
        siteData,
        profileImage,
         refetch
    }
    return (
     <ShareContext.Provider value={shareInfo}>
      {children}
     </ShareContext.Provider>
    );
};

export default ShareProvider;