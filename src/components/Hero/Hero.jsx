/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BgImage from "../../assets/bg-slate.png";
import { motion } from "motion/react";
import blackCoffee from "../../assets/black.png";

import Navbar from "../Navbar/Navbar";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaT } from "react-icons/fa6";

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main
      className="bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* navbar */}
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* hero */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  min-h-[850px] container ">
          {/* text-section  */}
          <div className=" text-light-orange mt-[100px] md:mt-0 space-y-28">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-7xl font-bold leading-tight ml-14"
            >
              Blvck Tumbler
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="relative"
            >
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                <h1 className="text-sm opacity-55 leading-loose">
                  "Black Tumbler – Sleek, durable, and stylish. Keeps drinks hot
                  or cold for hours with double-wall insulation. The perfect
                  eco-friendly companion for home, work, or travel."
                </h1>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[160px] bg-gray-700/25"></div>
            </motion.div>
          </div>
          {/* img-section  */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              src={blackCoffee}
              alt=""
              className="relative z-40 h-[400px] md:h-[700px] img-shadow"
            />
            {/* orange circle ring  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="md:h-[180px] h-[130px] md:w-[180px] w-[130px] absolute top-10 -right-12 md:top-24 border-primary border-[20px] rounded-full z-10"
            ></motion.div>

            {/* big black text section  */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="absolute -top-20 left-[200px] z-[1]"
            >
              <h1 className="text-[140px] scale-150 font-bold text-dark-gray/40 leading-none">
                Blvck Tumbler
              </h1>
            </motion.div>
          </div>
          {/* third-div-section  */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className=" text-light-orange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="text-7xl font-bold leading-tight ml-14 opacity-0">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Blvck Tumbler</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    "Black Tumbler – Sleek, durable, and stylish. Keeps drinks
                    hot or cold for hours with double-wall insulation. The
                    perfect eco-friendly companion for home, work, or travel."
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[160px] bg-dark-gray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* sidebar menu section  */}
        {sidebarOpen && (
          <motion.div
            initial={{
              x: 100,
            }}
            transition={{
              type: "spring",
            }}
            whileInView={{
              x: 0,
            }}
            className="absolute top-0 right-0 w-[145px] h-full bg-gradient-to-b from-primary/80 to-primary-dark/80 backdrop-blur-xs z-10"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line  */}
                <div className="w-[1px] h-[70px] bg-white"></div>

                {/* social icons  */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebook className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
