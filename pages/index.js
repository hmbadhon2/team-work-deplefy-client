import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Practice from '../Components/Home/Practice/Practice';
import TeamMember from '../Components/Home/TeamMember/TeamMember';
import Domain from '../Components/Home/Domain/Domain';
import ChoseUs from '../Components/Home/ChooseUs/ChoseUs';
import DataCenter from '../Components/Home/DataCenter/DataCenter';
import GoogleMap from '../Components/Home/GoogleMap/GoogleMap';
import Industry from '../Components/Home/Industry/Industry';
import HappyCustomer from '../Components/Home/HappyCustomer/HappyCustomer';
import BestInterest from '../Components/Home/BestInterest/BestInterest';


const Index = () => {
    return (
        <>
        <div className='md:max-w-[1140px] md:mx-auto my-12'>
            <Banner/>
        </div> 
        <div className='md:max-w-[1140px] md:mx-auto my-12 '>
            <Domain/>
        </div>
        <div className='md:max-w-[1140px] md:mx-auto my-12 '>
        <BestInterest></BestInterest>  
        </div>
       
        <div className='md:max-w-[1140px] md:mx-auto my-12'>
            <Pricing/>
        </div>   
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600 rounded-tl-[250px] dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 rounded-br-[250px] text-white pt-24 pb-64  md:py-24 my-12">
            <ChoseUs/>
        </div>   
        <div className='md:max-w-[1140px] md:mx-auto my-12' >
            <TeamMember/>
        </div>
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black py-12 my-12 rounded" >
            <DataCenter/>
        </div>
        <div className='md:max-w-[1140px] md:mx-auto'>
       <HappyCustomer></HappyCustomer>
       </div>
        <div className='' >
            <Industry></Industry>
        </div>
        <div className='md:max-w-[1140px] md:mx-auto my-12' >
            <Subscribe/>
        </div>
      
        <div className='md:max-w-[1140px] md:mx-auto my-12' >
            <Practice/>
        </div>
        </>
    );
};

export default Index;