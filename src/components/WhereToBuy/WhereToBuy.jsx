/* eslint-disable no-unused-vars */
import WorldMap from "../../assets/world-map.png";
import { motion } from "motion/react";

const WhereToBuy = () => {
  return (
    <div className="container my-32 ">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}

        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            class="text-4xl font-bold  text-dark-gray font-serif"
          >
            Buy our products from anywhere
          </motion.h1>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              class="flex flex-col items-center md:flex-row gap-4 "
            >
              <input
                type="text"
                placeholder="Name"
                className="input-style w-full md:w-[150px]"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="input-style w-full"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              class="flex flex-col items-center md:flex-row gap-4 "
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full"
                required
              />

              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full md:w-[150px]"
                required
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              type="submit"
              class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md"
            >
              Order Now
            </motion.button>
          </form>
        </div>
        {/* map section  */}
        <div className="  col-span-2 ">
          <motion.img
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            alt=""
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default WhereToBuy;
