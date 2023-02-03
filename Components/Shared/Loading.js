import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            {/* <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full bg-primary" role="status">
                <span className="visually-hidden bg-white">...</span>
            </div> */}
            <div >
                <Image src="/progressIndicator.gif" width={700} height={700}></Image>
            </div>

        </div>
    );
};

export default Loading;