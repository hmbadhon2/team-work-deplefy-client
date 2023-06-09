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
      <section className="px-4 md:px-0">
        <div className="max-w-xl  pt-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

          <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-2 lg:items-center">
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
                      happyCus?.map((happy, i) => <SwiperSlide ><div className="flex flex-col justify-center flex-1 ">

                        <p className="my-6 dark:text-gray-400 text-justify">{happy?.title}</p>
                        <p className=" mb-12 dark:text-gray-400">{happy?.name} ({happy?.position})</p>

                      </div></SwiperSlide>)
                    }
                  </Swiper>
                </>

              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="https://i.ibb.co/fMJwv9z/istockphoto-1200677760-612x612-removebg-preview.png" alt="" className="mx-auto" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HappyCustomer;


