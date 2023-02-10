import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Practice from '../Components/Home/Practice/Practice';
import TeamMember from '../Components/Home/TeamMember/TeamMember';
import Domain from '../Components/Home/Domain/Domain';
import ChoseUs from '../Components/Home/ChooseUs/ChoseUs';
import DataCenter from '../Components/Home/DataCenter/DataCenter';


const Index = () => {
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
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600 rounded-tl-[250px] rounded-br-[250px] text-white dark:bg-slate-900 py-24 my-12">
            <ChoseUs/>
        </div>   
        <div className='md:max-w-[1140px] md:mx-auto my-12' >
            <TeamMember/>
        </div>
        <div className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-slate-900 py-12 my-12 rounded" >
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

export default Index;