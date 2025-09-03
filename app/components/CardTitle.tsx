import React, { ReactNode } from 'react';

interface CardTitleProps {
    title: string;
    img: string;
    right?: ReactNode;
}

const CardTitle = ({ title, img, right }: CardTitleProps) => {
    return (
        <div className='flex items-center gap-3 mb-6'>
            <img
                src={img}
                alt={title}
                className="w-[18.75px] h-[25px] object-contain"
            />
            <h2 className='font-bold'>{title}</h2>
            <div className="flex items-center gap-2 ml-auto">
                {right}
            </div>
        </div>
    );
};

export default CardTitle;