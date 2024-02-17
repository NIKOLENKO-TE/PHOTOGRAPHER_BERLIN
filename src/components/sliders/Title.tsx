// Title.tsx
import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <h3 className="flex justify-center mb-1 uppercase" >
    <span className="w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]">
      <span className="text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[11px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-[4px] mx-4">
        {text}
      </span>
    </span>
  </h3>
);

export default Title;