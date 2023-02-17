import Image from "next/image";
import {Player} from '@lottiefiles/react-lottie-player'

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            {/* <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full bg-primary" role="status">
                <span className="visually-hidden bg-white">...</span>
            </div> */}
            <div >
            <Player className='w-max'
				autoplay
				loop
				src="https://assets7.lottiefiles.com/packages/lf20_rwq6ciql.json"></Player>
            </div>

        </div>
    );
};

export default Loading;