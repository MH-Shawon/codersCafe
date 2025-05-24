/* eslint-disable no-unused-vars */
import { GiHamburgerMenu } from "react-icons/gi";


import {motion} from "motion/react"


const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
      <motion.nav initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
          }} className="absolute top-0 left-0 w-full pt-10  text-white z-[9990] container">
      
        <div className="flex items-center justify-between ">
          {/* logo section  */}
                  <a href="/" className="text-2xl font-semibold uppercase translate-x-8">
            <span className="text-primary">Coders</span> Coffee.
          </a>
          {/* hamburger menu section  */}
              
                  <div onClick={() => setSidebarOpen(!sidebarOpen)}>
                      <GiHamburgerMenu className="text-3xl cursor-pointer translate-x-11" />
                  </div>
             
        </div>
     
    </motion.nav>
  );
};
export default Navbar;
