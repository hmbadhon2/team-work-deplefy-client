"use clien"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const HappyCustomer = () => {
    const happyCus = [
        {
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.',
            name: 'Bruce Johnston',
            position: 'Insurance Sales Agent'
        },
        {
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.',
            name: 'Barbara Cutierrez',
            position: 'Financial Analyst'
        },
        {
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.',
            name: 'Peter Warren',
            position: 'Accountent'
        },
    ]
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-xl p-6 pt-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
	
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl tracking-tight sm:text-5xl dark:text-gray-50">Happy<br></br>Customer</h3>
				<div className="">
               
                <>
                        
                        <Swiper
                          spaceBetween={30}
                          // centeredSlides={true}
                          autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          // navigation={true}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="mySwiper"
                        >
                          
                        {
                          happyCus?.map((happy, i)=><SwiperSlide ><div className="flex flex-col justify-center flex-1 dark:bg-gray-900">
                         
                          <p className="my-6 dark:text-gray-400 text-justify">{happy?.title}</p>
                          <p className="my-6 dark:text-gray-400">{happy?.name} ({happy?.position})</p>
                  
                      </div></SwiperSlide>)
                        }
                        </Swiper>
                      </>
	
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://i.ibb.co/fMJwv9z/istockphoto-1200677760-612x612-removebg-preview.png" alt="" className="mx-auto dark:bg-gray-500" />
			</div>
		</div>
	
	</div>
</section>
        </div>
    );
};

export default HappyCustomer;


// <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                
//                 <div className="container mx-auto space-y-12">
                
//                     <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        
//                         <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        
                        
//                     </div>
            
//                 </div>
//             </section>



