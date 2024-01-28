import React from "react";

interface SolutionCardProps {
    backgroundImage: string;
    title: string;
  }
  
  const SolutionCard: React.FC<SolutionCardProps> = ({
    backgroundImage,
    title,
  }) => {
    return (
      <div className="mx-auto my-10 w-1/2 overflow-hidde flex rounded-lg text-white border-2 border-[#5985a8] hover:scale-120 transition-transform duration-300" 
           style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="px-4 py-2 flex justify-center align-center h-24">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    );
  };
  
  export default SolutionCard;
