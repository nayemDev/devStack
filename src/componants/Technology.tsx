import React from 'react';

const TechnologyCard = () => {
    return (
        <div className='flex container mx-auto '>
            <div>
                <h1 className='text-4xl font-bold pt-20'>Explore the <span className='text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Techonologies</span></h1>
                <p className='font- text-xl text-[#8491A3]'>Pick one technology per category to build your stack.</p>
            </div>
            
        </div>
    );
};

export default TechnologyCard;