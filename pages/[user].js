import { useRouter } from 'next/router'
import { useEffect } from 'react';

//const useUser = () => ({user : { user: "rahul" }, loding : false});
const user = () => {
    const router = useRouter();
    const {query} = router ;
    // useEffect(() => {
    //   if(user.user == null) {
    //     router.replace("/");
    //   }
    // }, [])
    
  return (

    <div className='flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate'>
      <img class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" src="https://media.licdn.com/dms/image/D4D03AQFSAwOdjAjohQ/profile-displayphoto-shrink_800_800/0/1671710745719?e=1686787200&amp;v=beta&amp;t=WyJIGHwecJVItF-8LqMTcZQRSqxAWIn96Bm3aVLyRt4" alt="about avatar"></img>
      <h3 class="mt-6 mb-1 text-5xl font-semibold dark:text-white"> This is {query.user} Profile </h3>
        {/* <h1 className='bold'> This is {query.user} Page</h1> */}
        {/* <button className='dowanload-btn' onClick={e=>router.push(`/users/settings/${query.user}/`)}>Edit Profile</button> */}
        <button className='dowanload-btn' onClick={e=>router.push({
          pathname: 'users/settings/',
          query:{user: query.user}
        })}>Edit Profile</button>
        <p></p>
        </div>
  )
}

export default user