
import BannerImg from '../../assets/coffee-cover.jpg';
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
// eslint-disable-next-line no-unused-vars
import {motion} from "motion/react";


const AppBanner=()=>{
    return(
        <div className='container my-14'>
        <div 
              className="bg-cover bg-center bg-no-repeat sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
              style={{ backgroundImage: `url(${BannerImg})` }}
            >
            <div>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</motion.h1>
                        <motion.p initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.3,
                            }} className='text-center sm:px-20'>Stay organized and productive with real-time task updates anytime, anywhere.</motion.p>
                        {/* image section  */}
                        <div
                            
                        className='flex justify-center items-center gap-4'>
                            <a href="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                                <motion.img initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.4,
                                    }} src={AppStoreImg} alt="" />
                            </a>
                            <a href="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                                <motion.img initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.5,
                                    }} src={PlayStoreImg} alt="" />
                            </a>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )}
export default AppBanner;