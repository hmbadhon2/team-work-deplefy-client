import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Practice from '../Components/Home/Practice/Practice';
import TeamMember from '../Components/Home/TeamMember/TeamMember';
import Domain from '../Components/Home/Domain/Domain';
import ChoseUs from '../Components/Home/ChooseUs/ChoseUs';
import DataCenter from '../Components/Home/DataCenter/DataCenter';
import ReTeamMember from '../Components/Home/ReTeeamMember/ReTeamMember';



const Home = () => {
    return (
        <>
        <div className='md:max-w-[1140px] md:mx-auto my-12'>
            <Banner/>
        </div> 
        <div className='md:max-w-[1140px] md:mx-auto my-12 '>
            <Domain/>
        </div>   
        <div className='md:max-w-[1140px] md:mx-auto my-12'>
            <Pricing/>
        </div>   
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600 rounded-tl-[250px] dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-600 rounded-br-[250px] text-white pt-24 pb-64  lg:py-24 my-12">
            <ChoseUs/>
        </div>   
        <div className='md:max-w-[1140px] md:mx-auto my-12' >
            <TeamMember/>
        </div>
<<<<<<< HEAD
        <div className='md:max-w-[1140px] md:mx-auto my-12' >
            <ReTeamMember/>
        </div>
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-tr dark:from-lime-800 dark:to-lime-500 dark:text-black py-12 my-12 rounded" >
=======
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-600 dark:text-black py-12 my-12 rounded" >
>>>>>>> 5b71ad5bc427d172ad63fdc3766a2ef52f7d2621
            <DataCenter/>
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

export default Home;