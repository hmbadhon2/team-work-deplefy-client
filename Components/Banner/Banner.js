import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col md:flex-row-reverse">
            <Image src="/remove.png" width={800} height={800}></Image>
                <div>
                    <div className="text-4xl md:text-4xl lg:text-5xl font-bold text-pink-800">
                    <Typewriter
                        options={{
                            strings: ["Deploy Your Website With Deplify"],
                            autoStart: true,
                            loop: true,
                           
                        }}
                    />
                    </div>
                    
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline text-white bg-pink-800 self-center px-6 py-3 rounded-3xl mr-5">Get Started</button>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;