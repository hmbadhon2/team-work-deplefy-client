import Image from "next/image";
import Link from "next/link";
import {Player} from '@lottiefiles/react-lottie-player'


const Error = () => {
    return (
        <div>
             <Player className='w-max'
				autoplay
				loop
				src="https://assets8.lottiefiles.com/packages/lf20_n5q8wfa8.json"></Player>

        </div>
    );
};

export default Error;