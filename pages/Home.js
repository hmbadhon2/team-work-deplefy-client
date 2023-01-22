import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Team from '../Components/Home/Team/Team';
import Practice from '../Components/Home/Practice/Practice';


const Home = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto'>
            <Banner></Banner>
            <Pricing></Pricing>
            <Team></Team>
            <Subscribe></Subscribe>
            <Practice></Practice>
        </div>
    );
};

export default Home;