import { Avatar } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import UpdateUserModal from '../UpdateUserModal/UpdateUserModal';
import { Player } from '@lottiefiles/react-lottie-player'
import { ShareContext } from '../../ShareProvider/ShareProvider';





const Team = () => {

  const { user } = useContext(AuthContext);
  const{profileImage, refetch}=useContext(ShareContext);





  return (
    <div className='my-4'>

      <div className='border w-full md:w-1/2 md:px-4 py-7 mb-14  border-gray-300'>
        {profileImage[0]?.teamName ? <h1 className=' text-lg md:text-3xl mb-3'>Settings for <span>Register {profileImage[0]?.teamName}</span></h1> : <h1 className=' text-lg md:text-3xl mb-3'>Settings for <span>Register team name</span></h1>}
        <h2 className=' text-sm md:text-xl mb-3'>{profileImage?.length ? profileImage?.length : 1} Team member</h2>
        <h1 className=' text-sm md:text-xl mb-3'>Team created on {moment(profileImage[0]?.date).format('LL')} ({moment(profileImage[0]?.date).startOf('hour').fromNow()}).</h1>
      </div>






      {/* Secound step */}


      <div className='my-0 md:flex flex-col md:flex-row mb-20'>


        <div className=' w-full  md:w-1/2  flex  md:justify-start'>
          <ul className='md:ml-6'>
            
            <Player className=' w-full md:w-3/4'
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_3rqwsqnj.json"></Player>





          </ul>
        </div>



        <div className=' w-full md:w-1/2  md:ml-6 mt-7 md:mt-0 px-6 py-16 '>
        



          <div className=''>

           <div className='flex justify-start items-center'>
           <Player className='w-17 h-11'
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_wcdzldes.json"></Player>

             <h1 className='text-3xl mb-5'>Team information</h1>
           </div>

            <div className=" w-full">
              <table className="">
                <tbody>

                  <tr>
                    <td>
                      <div className="flex items-center">

                        <div>
                          <div className="font-bold">Team Name:</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {profileImage[0]?.teamName ? <h1 className='ml-20 text-lg font-serif'>{profileImage[0]?.teamName}</h1> : <h1 className='ml-20 text-lg font-serif'></h1>}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center">

                        <div>
                          <div className="font-bold">Slug:</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {profileImage[0]?.name ? <h1 className='ml-20 my-3 text-lg font-serif'>{profileImage[0]?.name}</h1> : <h1 className='ml-20 my-3 text-lg font-serif'>Slug Name</h1>}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center">

                        <div>
                          <div className="font-bold">Logo:</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {profileImage[0]?.logo ? <Avatar className='ml-20 text-lg font-serif' src={profileImage[0]?.logo} alt="avatar" /> : <Avatar className='ml-20 text-lg font-serif' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg" alt="avatar" />}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center">

                        <div>
                          <div className="font-bold my-3 mb-8">Current plan:</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {profileImage[0]?.current ? <h1 className='ml-20 my-3 mb-8 text-lg font-serif'>{profileImage[0]?.current}</h1> : <h1 className='ml-20 my-3 mb-8 text-lg font-serif '>Current plan</h1>}
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>


            {/* <button className="builds-button px-4 py-2 rounded-lg font-semibold dark:bg-lime-600 dark:text-black mt-10">Edit Team Information</button> */}

            <label htmlFor="my-modal-3" className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white px-4 py-2 rounded-lg font-semibold dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black ">Edit Team Information</label>
          </div>

        </div>




      </div>
      <div>
        <UpdateUserModal refetch={refetch}></UpdateUserModal>
      </div>
      <div>
        
      </div>


    </div>
  );
};

export default Team;