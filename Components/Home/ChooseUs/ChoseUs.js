import Image from "next/image";


const ChoseUs = () => {
    return (
        <div className="md:max-w-[1140px] md:mx-auto" >
            <div className="text-center">
            <h3 className="font-semibold text-3xl mb-7">LEARN ABOUT</h3>
            <h2 className="font-semibold text-5xl mb-7">Why Choose Deplify</h2>
            </div>

            <div className="grid grid-cols-3 gap-3 py-12 px-12 bg-gray-100 rounded text-black">
                    <div className=" flex items-center flex-col rounded border border-gary-200 p-10 text-center hover:bg-white">
                        <Image src="/Choose us Logo/Best Price Logo.png" height={80} width={80}></Image>
                        <h3 className="font-semibold text-3xl my-10">Best Pricing Deals</h3>
                        <p className="leading-8 font-semibold text-lg">We provide the best hosting price. Also, we offer a 14-day money-back guarantee.</p>
                    </div>
                    <div className=" flex items-center flex-col rounded border border-gary-200 p-10 text-center hover:bg-white">
                        <Image src="/Choose us Logo/Easy use logo.png" height={80} width={80}></Image>
                        <h3 className="font-semibold text-3xl my-10">Super Easy To Use</h3>
                        <p className="leading-8 font-semibold text-lg">Within a few clicks, you can set up your website hosting and environment easily.</p>
                    </div>
                    <div className=" flex items-center flex-col rounded border border-gary-200 p-10 text-center hover:bg-white">
                        <Image src="/Choose us Logo/Support logo.png" height={80} width={80}></Image>
                        <h3 className="font-semibold text-3xl my-10">Dedicated Support</h3>
                        <p className="leading-8 font-semibold text-lg">We support all our customers 24/7, so they can manage their websites smoothly.</p>
                    </div>
            </div>
        </div>
    );
};

export default ChoseUs;