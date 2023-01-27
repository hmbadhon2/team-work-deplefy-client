import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Practice from '../Components/Home/Practice/Practice';
import TeamMember from '../Components/Home/TeamMember/TeamMember';


const Home = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto'>
            <Banner></Banner>
            <Pricing></Pricing>
            <TeamMember></TeamMember>
            <Subscribe></Subscribe>
            <Practice></Practice>
        </div>
    );
};

export default Home;