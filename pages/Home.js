import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Navbar from '../Components/Home/Practice/Practice'
import Subscribe from '../Components/Home/Subscribe/Subscribe';

const Home = () => {
    return (
        <div className='lg:max-w-[1140px] lg:mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Pricing></Pricing>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;