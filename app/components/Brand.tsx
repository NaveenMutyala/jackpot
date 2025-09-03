import React from 'react';

// Brand component displays the brand logo in a single horizontal scrollable row
const Brand = () => {
    return (
        <div className="w-full flex-nowrap flex overflow-x-auto items-center my-4 px-2 gap-4 hide-scrollbar">
            <div className='brand'>
                <img
                    src="/brand.png"
                    alt="Brand Logo"
                    className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className='brand'>
                <img
                    src="/brand.png"
                    alt="Brand Logo"
                    className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className='brand'>
                <img
                    src="/brand.png"
                    alt="Brand Logo"
                    className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded"
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    );
};

export default Brand;