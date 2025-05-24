// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import CreditCards from "../../assets/website/credit-cards.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold uppercase">CODERS CAFE</h2>
            <p className="text-sm mb-2">
              Coders Cafe is your go-to place for mastering web development.
              From beginner-friendly tutorials to advanced full-stack projects,
              we help developers grow and succeed in their tech careers.
            </p>
            <div className="mt-4">
              <p className="mb-2 flex items-center gap-2">
                <FaPhone className="text-base" /> +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-base" /> Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* footer Links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* first column section  */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* second column section  */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold ">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="#">
                <FaFacebookF className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#">
                <FaTelegramPlane className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#">
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Payment Methods</h4>

              <img src={CreditCards} alt="Credit Cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copy right section  */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="border-t-2 border-white mt-8 pt-8 text-center text-sm"
        >
          Copyright © 2025 CodersCafe. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
