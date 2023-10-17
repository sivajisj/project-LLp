import React from 'react';
import OctaverseImage from '../assets/logoV.jpg'; 

function WhyOctaverse() {
    return (
        <div className="bg-white p-10 md:p-20" name="learnMore">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <img src={OctaverseImage} alt="Octaverse LLP" className="w-1/3 md:w-1/3 rounded shadow-lg mb-8 md:mb-0 md:mr-10 transition-transform duration-300 hover:scale-105" />

                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-red-700 mb-8">Why Octaverse LLP?</h2>
                    <p className="text-blue-600 mb-6">We deeply resonate with the belief that our clients' triumphs pave the way for our achievements. With unwavering professionalism and consistently high standards, we ensure that the finest team of senior consultants is appointed to each project. Our understanding transcends beyond mere business needs; we speak your language, share your ethos, and aim to amplify your growth and revenue.</p>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Save Time, Achieve More!</h3>
                        <p className="text-blue-500">With our presence spanning across two continents, you experience an extended operational window. Enjoy 56 hours of expert consultation every week, a notable leap from the conventional 40 hours.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Bridging Communication Gaps</h3>
                        <p className="text-blue-500">Our multilingual consultants are adept at minimizing common barriers posed by language and culture, ensuring seamless project discussions and execution.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-3">Exemplary Project Management</h3>
                        <p className="text-blue-500">We pride ourselves on outsourcing experienced Project Managers to elite global enterprises. Immerse in our top-tier Project Management Services, an integral component of our offerings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyOctaverse;
