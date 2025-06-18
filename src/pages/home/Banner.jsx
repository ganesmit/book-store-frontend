import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Welcome to Gilbert's Book Boutique!</h1>
            <p className='mb-10'>Welcome to "Gilbert's Book Boutique" a cozy haven for book lovers nestled around the world. Our online inventory is brimming with carefully curated titles, from timeless classics to contemporary gems, offering something for every reader. Whether you're seeking a quiet night at home to lose yourself in a novel, exploring diverse genres, or searching for the perfect literary gift, Gilbert's Book Boutique invites you to discover the magic of stories through our warm, inviting online store. Step inside, and let your next great adventure begin!</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

        
    </div>
  )
}

export default Banner