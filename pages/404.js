import Image from "next/image";
import Link from "next/link";


const Error = () => {
    return (
        <div>
            <Image src='/404 page.jpg' width={1440} height={50}>

            </Image>
            <Link href='/'>
                <button className="btn btn-primary">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Error;