/* eslint-disable no-unused-vars */
import { easeInOut, motion} from "motion/react"
import Coffee1 from '../../assets/coffee/coffee1.png'
import Coffee3 from '../../assets/coffee/coffee3.png'



const coffeesData = [
    {
        id: 1,
        image: Coffee1, 
        title: "Black Coffee",
        subtitle: "Bold • Pure • Timeless",
        description: "A rich, unfiltered espresso or slow-drip brew for those who appreciate coffee in its most authentic form."
    },
    {
        id: 2,
        image: Coffee3,
        title: "Hot Coffee",
        subtitle: "Warm • Comforting • Inviting",
        description: "From velvety cappuccinos to aromatic pour-overs, each cup is a moment of quiet luxury."
    },
    {
        id: 3,
        image: Coffee1,
        title: "Cold Coffee",
        subtitle: "Smooth • Refreshing • Balanced",
        description: "Chilled to perfection with a delicate sweetness—ideal for a revitalizing pause."
    }
  ];

  const cartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1,
         y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
           ease: easeInOut
        }
     },
  };


  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            delay: 0.6,
        }
    }

  };

const CoffeeCarts=()=>{
    return(
        <div className="container my-16 space-y-4">
             {/* header section  */}
             <div className="text-center max-w-lg space-y-2 mx-auto">
                <motion.h1
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                   type: "spring",
                   stiffness: 150,
                   damping: 10,
                    delay: 0.2}}

                class="text-3xl font-bold text-light-gray">
                    The <span class="text-primary">Coffee</span> Connoisseur
                </motion.h1>
                
                <motion.p initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.6
                    }} class="opacity-80 ">
                    Single-origin poetry in a cup—where floral top notes waltz with chocolatey depths in a caffeinated sonnet.
                </motion.p>
             </div>
             {/* card section  */}


            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.2 }} 
            className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
                {coffeesData.map((service) => (
                    <motion.div
                    variants={cartVariants}
                        key={service.id}
                        className=" text-center p-4 space-y-4"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="img-shadow2 max-w-[200px]mx-auto hover:scale-110 duration-300 cursor-pointer"
                        />
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-dark-gray">{service.title}</h3>
                            <p className="text-primary font-medium my-2">{service.subtitle}</p>
                            <p className="text-dark-gray">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )}
export default CoffeeCarts;