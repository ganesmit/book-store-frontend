import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "After Anti-Trump Protests Sweep the Nation, Curfew Begins in Downtown Los Angeles",
        "description": "Demonstrators gathered in communities large and small. Many events on the East Coast have ended, but police clashed with some protesters in L.A.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Trump to Again Extend TikTok’s Reprieve From U.S. Ban",
        "description": "The president plans to sign another executive order this week that would give the popular video app more time to change its ownership structure.",
        "image": news2
    },
    {
        "id": 3,
        "title": "China’s Spy Agencies Are Investing Heavily in A.I., Researchers Say",
        "description": "A new report says that China’s intelligence agencies are pouring money into artificial intelligence research, with the goal of using it to enhance their surveillance and espionage capabilities.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Oil Prices Waver After Israel Strikes Iran’s Energy Assets",
        "description": "U.S. oil prices already jumped last week, which could cause prices at the pump to rise about 20 cents a gallon in the coming weeks.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Meta Invests $14.3 Billion in Scale AI to Kick-Start Superintelligence Lab",
        "description": "Meta is making its first major minority investment in an outside company as it tries to catch up to a growing field of artificial intelligence rivals.",
        "image": news2
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>News </h2>

        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            
            {
                news.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col sm:flex-row sm:justify-between items-center' 
                        gap-12>
                            {/* content */}
                            <div className='py-4'>
                                <Link to={"/"}>
                                    <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>
                                        {item.title}</h3>
                                </Link>
                                <div className='w-12 h-[4px] bg-primary mb-5'></div>
                                <p className='text-sm text-gray-600'>{item.description}</p>
                            </div>

                            <div className='flex-shrink-0'>
                                <img src={item.image} alt="" className='w-f object-cover'/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default News