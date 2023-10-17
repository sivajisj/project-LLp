// import React from 'react';
// import { FaRocket, FaWrench, FaBusinessTime, FaLightbulb } from 'react-icons/fa';

// function About() {
//     return (
       
//            <div name="about" className="bg-gray-100 pt-32 min-h-screen p-8">
//           <h1 className="text-4xl font-bold my-10 text-center text-blue-600 transform transition-all duration-500 hover:scale-105 hover:text-blue-700">About Octaverse LLP</h1>


//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

//                 {/* Introduction Box */}
//                 <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
//                     <FaRocket className="text-blue-600 mb-4 hover:animate-pulse" size={32} />
//                     <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction</h2>
//                     <p className="text-blue-600">"Established in 2021, Octaverse IT is a premier software solutions provider, driving next-gen business innovation through advanced technology, automation and expert consulting."</p>
//                 </div>

//                 {/* Specialization Box */}
//                 <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
//                     <FaWrench className="text-blue-600 hover:animate-spin mb-4" size={32} />
//                     <h2 className="text-2xl font-semibold mb-4 text-blue-700">Specialization</h2>
//                     <p className="text-blue-600">"Leveraging new technologies, Octaverse LLP provides unique automation solutions for modern businesses, setting us apart with our distinctive products and expertise."</p>
//                 </div>

//                 {/* Enterprise Business Box */}
//                 <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
//                     <FaBusinessTime className="text-blue-600 mb-4" size={32} />
//                     <h2 className="text-2xl font-semibold mb-4 text-blue-700">Strategic IT Consulting Services</h2>
//                 <p className="text-blue-600">"Octaverse IT empowers mid-sized firms across sectors, enhancing growth and teamwork. Our services encompass all ERP facets, from strategy to daily operations."</p>

//                 </div>

//                 {/* Our Strategy Box */}
//                 <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
//                     <FaLightbulb className="text-blue-600 mb-4 hover:animate-ping" size={32} />
//                     <h2 className="text-2xl font-semibold mb-4 text-blue-700 ">Our Strategy</h2>
//                     <p className="text-blue-600">"Each company is distinct; we offer bespoke solutions. Leveraging our ERP expertise, we enhance IT systems for optimal client ROI."</p>
//                 </div>

//             </div>
//         </div>
      
        
//     );
// }

// export default About;
import React from 'react';
import { FaRocket, FaWrench, FaBusinessTime, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const titleVariants = {
        hover: { scale: 1.1, textShadow: "0px 0px 5px #4B6EA9", boxShadow: "0px 0px 5px #4B6EA9" },
    };

    return (
        <motion.div initial="hidden" animate="visible" className="bg-gray-100 pt-32 min-h-screen p-8">
            <motion.h1 
                className="text-4xl font-bold my-10 text-center text-blue-600 transform transition-all duration-500"
                variants={titleVariants}
                whileHover="hover"
            >
                About Octaverse LLP
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Introduction Box */}
                 
                <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl"
>
    <FaRocket className="text-blue-600 mb-4 hover:animate-pulse" size={32} />
    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction</h2>
    <p className="text-blue-600">
        "Established in 2021, Octaverse IT is a premier software solutions provider, 
        driving next-gen business innovation through advanced technology, automation and 
        expert consulting."
    </p>
</motion.div>



<motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl"
>
    <FaWrench className="text-blue-600 hover:animate-spin mb-4" size={32} />
    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Specialization</h2>
    <p className="text-blue-600">
        "Leveraging new technologies, Octaverse LLP provides unique automation solutions for 
        modern businesses, setting us apart with our distinctive products and expertise."
    </p>
</motion.div>


<motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl"
>
    <FaBusinessTime className="text-blue-600 mb-4" size={32} />
    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Strategic IT Consulting Services</h2>
    <p className="text-blue-600">
        "Octaverse IT empowers mid-sized firms across sectors, enhancing growth and teamwork. 
        Our services encompass all ERP facets, from strategy to daily operations."
    </p>
</motion.div>



<motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl"
>
    <FaLightbulb className="text-blue-600 mb-4 hover:animate-ping" size={32} />
    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Strategy</h2>
    <p className="text-blue-600">
        "Each company is distinct; we offer bespoke solutions. Leveraging our ERP expertise, 
        we enhance IT systems for optimal client ROI."
    </p>
</motion.div>


               


                {/* ... More boxes ... */}
            </div>
        </motion.div>
    );
}

export default About;
