import React from 'react';
import HostingFaq from '../Components/HostingFaq/HostingFaq';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';

const Faq = () => {
    return (
        <div>
            <HostingFaq></HostingFaq>
        </div>
    );
};

export default Protect(Faq);