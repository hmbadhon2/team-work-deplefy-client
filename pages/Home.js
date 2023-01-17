import Pricing from '../Components/Pricing/Pricing'
import Subscribe from '../Components/Subscribe/Subscribe'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'

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